import { ApolloServer } from 'apollo-server';
import connectDB from './config/db.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import express from 'express';

import cors from 'cors';

const app = express();
app.use(cors());
app.use('/graphql', (req, res) => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  new ApolloServer({ typeDefs, resolvers });
});

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// The `listen` method launches a web server.
const port = process.env.PORT || 4000;

app.listen(port, () => {
  connectDB();
  console.log('listening on port', port);
});
