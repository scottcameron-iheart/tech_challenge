import React, { FC } from 'react';
import Song from '../interface/Song';
import TableItem from './TableItem';

const { useState } = React;

interface tableProps {
    songData: Song[] | undefined
}


function Table({ songData }: tableProps) {


    return (
        <div className="table-wrapper">
            <div className="table-header">

            </div>
            <div className="table-body">
                <TableItem></TableItem>
            </div>
        </div>
    );
}

export default Table;
