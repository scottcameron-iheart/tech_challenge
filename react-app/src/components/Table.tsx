import React from 'react';
import TableItem from './TableItem';

const { useState } = React;


function Table() {


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
