import axios, { AxiosInstance } from 'axios';
import Song from '../interface/Song'

export default class SongListApi {
    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000',
            withCredentials: true,
        })
    }

    public async getSongData(): Promise<Song[]> {

        try {
            const response = await this.axiosInstance.get('/songs');
            const data = JSON.parse(response.data);
            return new Promise(resolve => resolve(data));
        } catch (err) {
            console.error('An unexpected error occured retrieving song data: ', err)
            return new Promise((resolve, reject) => reject(err));
        }
    }
}