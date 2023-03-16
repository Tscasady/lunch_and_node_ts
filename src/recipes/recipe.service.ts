import { Recipe } from './recipe.interface'
import axios, { AxiosResponse } from 'axios'

const conn = axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    type: 'public',
    app_id: process.env.EDAMAM_APP_ID,
    app_key: process.env.EDAMAM_APP_KEY,
  },
})

export async function getRecipes(country: string): Promise<Recipe[]> {
  const response = await conn.get('/api/recipes/v2', {
    params: {
      q: country,
    },
  })
  return buildRecipes(response, country)
}

function buildRecipes(response: AxiosResponse, country: string): Recipe[] {
  return response.data.hits.map((recipeData: any): Recipe => {
    return {
      id: null,
      type: 'recipe',
      attributes: {
        title: recipeData.recipe.label,
        url: recipeData.recipe.uri,
        country: country,
        image: recipeData.recipe.image
      }
    }
  })
}
