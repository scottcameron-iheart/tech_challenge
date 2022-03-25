import { S3 } from "aws-sdk";

export interface Song {
  song: string;
  artist: string;
  songReleaseDate: string;
  playCount: number;
  metricA: number;
  metricB: number;
  metricC: number;
  metricD: number;
  metricE: number;
  metricF: number;
  metricG: number;
  metricH: number;
  metricI: number;
  metricJ: number;
  metricK: number;
  metricL: number;
  metricM: number;
  metricN: number;
  metricO: number;
  metricP: number;
}

export const songService = ({ event }) => ({
  songs: async (): Promise<Song[]> => {
    const s3 = new S3();
    const bucket: string = 'arn:aws:s3:us-east-1:974298241236:accesspoint/tech-challenge-iheart-bucket';
    const key: string = 'songData.json';
    const params: S3.Types.GetObjectRequest = {
      Bucket: bucket,
      Key: key,
    };
    try {
      const data = await s3.getObject(params).promise();
      const body = data.Body?.toString() ?? "";
      const songArr = JSON.parse(body);
      return new Promise(resolve => resolve(songArr));
    } catch (err) {
      console.log(err);
      return new Promise((res, reject) => reject(err));
    };
  }
});