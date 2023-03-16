import express from "express";
import * as dotenv from "dotenv";
import { recipesRouter } from './routes/recipes';
const app = express();
const port = 3000; // default port to listen

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/recipes', recipesRouter);

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

module.exports = app;
