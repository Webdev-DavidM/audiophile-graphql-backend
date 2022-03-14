import { ApolloServer } from 'apollo-server';
import connectDB from './config/db.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import express, { application } from 'express';
import cors from 'cors';

import cors from 'cors';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  connectDB();
  console.log(`🚀  Server ready at ${url}`);
});
