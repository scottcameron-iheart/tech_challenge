import merge from 'lodash.merge';
import * as rootSchema from './schemas/root';
import * as songSchema from './schemas/song';



export const graphqlSchema = () => {
  const schemas = [rootSchema, songSchema];

  const typeDefs = schemas.map(schema => schema.typeDefs);
  const resolvers = schemas.reduce((acc, schema) => merge(acc, schema.resolvers), {});

  return { typeDefs, resolvers };
};