import axios from "axios";
const apiKey = "971f4ca55b47036d2b0688ef3c67403e";
const url = "https://www.food2fork.com/api/search?key=" + apiKey;

export function recipe_getAll() {
  return axios.get(url);
}

export function recipe_search(search, page) {
  return axios.post(url + "&q=" + search + "&page=" + page);
}

export function recipe_insert(recipe) {
  return axios.post("api/recipes", recipe);
}

export function recipe_search_sql(search) {
  return axios.get("api/recipes?q=" + search);
}

export function addFavorite(recipeId) {
  return axios.post("api/recipes/favorite", recipeId);
}

export function deleteFavorite(recipeId) {
  return axios.delete("api/recipes/favorite", recipeId);
}
