export const addIngredient = ingredient => ({ type: "ADD_INGREDIENT", payload: ingredient });
export const addRecipe = recipe => ({ type: "ADD_RECIPE", payload: recipe });
export const addFavoriteToStore = recipe => ({ type: "ADD_FAVORITE", payload: recipe });
export const removeFavoriteFromStore = recipe => ({ type: "REMOVE_FAVORITE", payload: recipe });
