import { songService } from "./services/song";

export const graphqlContext = ({ event }) => {
  if (!event) {
    throw new Error('Lambda event is missing!!');
  }

  return {
    SongService: songService({ event })
  };
};