import React from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';

const { useEffect } = React;

function SongPage() {
    return (
        <div className="song-page">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Song List</h1>
            <Table></Table>
        </div>
    );
}

export default SongPage;
