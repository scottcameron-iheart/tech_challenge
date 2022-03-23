import axios from 'axios';
import Song from '../interface/Song'

export default class SongListApi {
    async getSongData(): Promise<Song[]> {
        const url = 'http://localhost:3000/songs';
        try {
            const response = await axios.get(url, {
                withCredentials: true
            });
            const data = JSON.parse(response.data);
            return new Promise(resolve => resolve(data));
        } catch (err) {
            console.error('An unexpected error occured retrieving song data: ', err)
            return new Promise((resolve, reject) => reject(err));
        }
    }
}