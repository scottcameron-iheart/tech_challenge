import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

function Songs() {
    const [songs, setSongs] =useState([]);
    useEffect(() => {

        axios({
            "method": "GET",
            "url": "https://cors-anywhere.herokuapp.com/https://r5c0d1qq27.execute-api.us-east-2.amazonaws.com/beta",
        })
            .then((response) => {
                setSongs(response.data[0]._1)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    const columns = [{
        Header: 'Song',
        accessor: 'song',
    }
        ,{
            Header: 'Artist',
            accessor: 'artist' ,
        }
        ,{
            Header: 'Release Date',
            accessor: 'songReleaseDate' ,
        }
        ,{
            Header: 'Play Count',
            accessor: 'playCount',
        },
        {
            Header: 'Metric A',
            accessor: 'metricA',
        },
        {
            Header: 'Metric B',
            accessor: 'metricB',
        }
    ]

        return (
            <ReactTable
                data={songs}
                columns={columns}
            />
        )
}


export default Songs;
