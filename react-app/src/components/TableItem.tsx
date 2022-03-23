import React from 'react';
import Song from '../interface/Song';
import './TableItem.css'

interface TableItemProps {
    song: Song;
}

function TableItem({ song }: TableItemProps) {


    return (
        <div className="table-item">
            {Object.values(song).map((val, i) => {
                const colClass = `table-cell col-${i}`
                return (
                    <div className={colClass} key={val + '-' + i}>
                        <p>{val}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default TableItem;
