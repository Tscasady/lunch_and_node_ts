import express from "express";
import {Recipe} from '../recipes/recipe.interface'
import { getRecipes } from '../recipes/recipe.service'
export const recipesRouter = express.Router()



/* GET recipes page. */
recipesRouter.get('/', async (req, res) => {
  const country = req.query.country;

  console.log('hi')
  // make the API call
  try {
    let recipes: Recipe[] = await getRecipes(country);
    console.log(recipes)
    res.send(recipes);
  } catch (error) {
    res.status(500).send('We goof\'d');
  }
});


