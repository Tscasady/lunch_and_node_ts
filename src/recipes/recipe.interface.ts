export interface Recipe {
  title: string;
  url: string;
  country: string;
  image: string;
}

export interface Recipes {
  [key: number]: Recipe;
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
