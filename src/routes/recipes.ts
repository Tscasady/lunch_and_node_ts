import express from "express";
export const recipesRouter = express.Router()
import axios from 'axios';

const conn = axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    type: 'public',
    app_id: process.env.EDAMAM_APP_ID,
    app_key: process.env.EDAMAM_APP_KEY,
  },
})


interface Recipe {
  title: string;
  url: string;
  country: string;
  image: string;
}

/* GET recipes page. */
recipesRouter.get('/', async (req, res) => {
  const country = req.query.country

  // make  the api call
  try {
    const response = await conn
    .get('/api/recipes/v2', {
      params: {
        q: country,
      },
    });
    const recipes: Recipe[] = response.data.hits.map((recipeData: any) => {
      return {
            title: recipeData.recipe.label,
            url: recipeData.recipe.uri,
            country,
            image: recipeData.recipe.image,
      }
        // return {
        //   id: null,
        //   type: 'recipe',
        //   attributes: {
        //     title: recipe_data.recipe.label,
        //     url: recipe_data.recipe.uri,
        //     country: country,
        //     image: recipe_data.recipe.image,
        //   },
        // }
      });
    res.send(recipes)
    } catch(error) {
    res.status(500).send('Server Error')
  }
})

