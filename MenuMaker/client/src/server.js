import axios from "axios";
const url = "https://www.food2fork.com/api/search?key=" + apiKey + "&q=beef%20garlic&page=";
const apiKey = "971f4ca55b47036d2b0688ef3c67403e";

export function recipe_getAll() {
  axios.get(url);
}

export function recipe_search(search, page) {
  axios.post(url + "&q=" + search + "&page=" + page);
}
