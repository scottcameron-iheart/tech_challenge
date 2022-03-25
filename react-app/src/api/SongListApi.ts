import axios from 'axios';
import Song from '../interface/Song'

export default class SongListApi {
    url: string;
    songsQuery: string;

    constructor() {
        this.url = 'http://localhost:3000/graphql';
        this.songsQuery = `query {
            songs {
                song
                artist
                songReleaseDate
                playCount
                metricA
                metricB
                metricC
                metricD
                metricE
                metricF
                metricG
                metricH
                metricI
                metricJ
                metricK
                metricL
                metricM
                metricN
                metricO
                }
            }`
    }

    async getSongData(): Promise<Song[]> {
        try {
            const response = await axios.post(this.url, {
                query: this.songsQuery
            });
            debugger;
            const songList = response.data.data.songs;
            return new Promise(resolve => resolve(songList));
        } catch (err) {
            console.error('An unexpected error occured retrieving song data: ', err)
            return new Promise((resolve, reject) => reject(err));
        }
    }
}