// Imports
import express from "express";
import * as dotenv from "dotenv";
// docs said do this for es6, idk why
dotenv.config();
import { recipesRouter } from './routes/recipes';
import { learningResourcesRouter } from './routes/learning_resources';
import { usersRouter } from './routes/users';

// App Vars
if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

// App Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start the Server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );

//Routes
app.use('/api/v1/recipes', recipesRouter);
app.use('/api/v1/learning_resources', learningResourcesRouter);
app.use('/api/v1/users', usersRouter);

