import React from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';
import SongListApi from '../api/SongListApi'
import Song from '../interface/Song'

const { useEffect, useState } = React;

function SongPage() {
    const [songData, setSongData] = useState<Song[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [columnNames, setColumnNames] = useState(['']);

    useEffect(() => {
        const songApi = new SongListApi();
        songApi.getSongData()
            .then(data => {
                setSongData(data);
                setIsLoading(false);
                setColumnNames(Object.keys(data[0]));
                console.log('Song data Loaded');
            }).catch(() => {
                console.log('Issue retrieving song data in SongPage component.');
            })
    }, []);

    return (
        <div className="song-page">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Song List</h1>
            {isLoading ?
                <p>Loading...</p> :
                <Table songData={songData} columnNames={columnNames}></Table>
            }

        </div>
    );
}

export default SongPage;
