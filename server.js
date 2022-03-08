// importing environmental variables
// import "./loadEnv.js";
import express from "express";
import cors from "cors";
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema.js'
import resolver from './graphql/resolver.js'

// I have chosen to use ES6 modules in this project rather than common js require. To do this I have added   "type": "module" in the package json file. 

console.log("app backend running");

// importing express

const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: resolver,
//   graphiql: true,
// }))

// morgan is a middle ware which will details all http requests in the console
// import mongoose from "mongoose";
// import multer from "multer";
// export const upload = multer({ dest: "uploads/" });

// app.use(cors());
// import morgan from "morgan";
// app.use(morgan("combined"));

// // here I am importing the database which has been set up in the config folder, in node always put the filename at the end

import connectDB from "./config/db.js";
connectDB();

// es6 doesnt wrap the modules in a wrapper so __dirname doesnt exist so i am creating it below with path.resolve
import path from "path";
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// below runs the request through each use line of code

import shopRouter from "./routes/products.js";
import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("welcome to the e-commerce api");
});



// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, "public")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// if (process.env.NODE_ENV === 'production') {
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
//   });

// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("working");
});
