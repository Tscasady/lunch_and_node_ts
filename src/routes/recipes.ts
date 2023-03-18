import express, { Request, Response} from "express";
import {Recipe} from '../recipes/recipe.interface'
import { getRecipes } from '../recipes/recipe.service'
import { getCountry } from '../recipes/country.service'
export const recipesRouter = express.Router()

/* GET recipes endpoint. */
recipesRouter.get('/', async (req: Request, res: Response) => {
  let country = req.query.country as string;

  if(!country){
    country = await getCountry();
  }
  try {
    let recipes: Recipe[] = await getRecipes(country);
    res.send({ data: recipes });
  } catch (error) {
    res.status(500).send('We goof\'d');
  }
});





