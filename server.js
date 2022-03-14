import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { resolvers } from './graphql/resolvers.js';
import { typeDefs } from './graphql/typeDefs.js';
import express from 'express';
import http from 'http';
import path from 'path';
import connectDB from './config/db.js';

async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  app.use(express.static('public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
  connectDB();
  server.applyMiddleware({ app });
  let port = process.env.PORT | 4000;
  await new Promise((resolve) => httpServer.listen(port, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
