import React, { SyntheticEvent } from 'react';
import Song from '../interface/Song';
import TableItem from './TableItem';
import './Table.css'
import { constants } from '../helper/constants';
import songSorter from '../helper/songSorter';
import { isNullishCoalesce } from 'typescript';

const { useState } = React;

export interface TableProps {
    songData: Song[] | undefined
    columnNames: string[]
}

function Table({ songData, columnNames }: TableProps) {
    const [displayList, setDisplayList] = useState(songData);
    const [sortDirection, setSortDirection] = useState(constants.asc);
    const [sortByColumn, setSortByColumn] = useState('');

    const headerClickHandler = (e: SyntheticEvent) => {
        const divTarget = e.currentTarget;
        const columnName = divTarget.getAttribute('data-column') ?? '';
        let newSortDirection;
        let newDisplayList = displayList ? [...displayList] : [];

        // first time column is clicked, sort in ascending order
        // additional clicks on the same column will alternate sort direction
        if (columnName === sortByColumn) {
            newSortDirection = sortDirection === constants.asc ? constants.desc : constants.asc
            newDisplayList.reverse();
        } else {
            newSortDirection = constants.asc;
            newDisplayList = songSorter(newDisplayList, columnName)
        }

        setSortDirection(newSortDirection);
        setSortByColumn(columnName ?? '');
        setDisplayList(newDisplayList);
    }

    return (
        <div className="table-wrapper">
            <div className="table-header">
                {columnNames.map((name, i) => {
                    const colClass = `table-cell col-${i} header-cell`
                    const sortArrow = name === sortByColumn
                        ? sortDirection === constants.asc
                            ? '↑' // up arrow
                            : '↓' // down arrow
                        : '';
                    return (
                        <div className={colClass} data-column={name} key={name} onClick={headerClickHandler}>
                            <p>{name} {sortArrow}</p>

                        </div>
                    )
                })}
            </div>
            <div className="table-body">
                {displayList?.map((song, i) => {
                    return (
                        <TableItem song={song} key={i}></TableItem>
                    )
                })}
            </div>
        </div>
    );
}

export default Table;
