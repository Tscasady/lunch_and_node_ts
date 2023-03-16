import express, { Request, Response} from "express";
import {LearningResource} from '../learning_resources/learning_resource.interface'
import { getLearningResources } from '../learning_resources/learning_resources.service'
export const learningResourcesRouter = express.Router()

/* GET LR endpoint. */
learningResourcesRouter.get('/', async (req: Request, res: Response) => {
  let country = req.query.country.toString();
  try {
    let lr: LearningResource = await getLearningResources(country);
    res.send({ data: lr });
  } catch (error) {
    res.status(500).send('We goof\'d');
  }
});


