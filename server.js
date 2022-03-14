import { ApolloServer } from 'apollo-server';
import connectDB from './config/db.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import express from 'express';

import cors from 'cors';

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
