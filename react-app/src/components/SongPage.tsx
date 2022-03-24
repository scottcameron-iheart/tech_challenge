import React from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';
import Song from '../interface/Song'
import './SongPage.css'

interface SongProps {
    songData: Song[] | undefined,
    isLoading: boolean,
    columnNames: string[],
    hasError: boolean,
}

function SongPage(props: SongProps) {

    const { songData, isLoading, columnNames, hasError } = props;

    return (
        <div className="song-page">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1>Song Table</h1>
            {hasError ?
                <p>Sorry, an error has occured. Check that your AWS SAM local api is running
                    or the console logs for more details.
                </p> :
                isLoading ?
                    <p>Loading...</p> :
                    <Table songData={songData} columnNames={columnNames}></Table>
            }

        </div>
    );
}

export default SongPage;
