import React from 'react';
import Table from './Table';

const { useEffect } = React;

function SongPage() {
    return (
        <div className="song-page">
            <h1>Song List</h1>
            <Table></Table>
        </div>
    );
}

export default SongPage;
