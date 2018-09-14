import { ADD_INGREDIENT, ADD_RECIPE } from "../constants/action-types";

export const addIngredient = ingredient => ({ type: ADD_INGREDIENT, payload: ingredient });
export const addRecipe = recipe => ({ type: ADD_RECIPE, payload: recipe });
