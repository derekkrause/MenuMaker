﻿using MenuMaker.Models;
using MenuMaker.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Net.Http;

namespace MenuMaker.Controllers
{
    [RoutePrefix("api/recipes")]
    public class RecipeController : ApiController
    {
        readonly IRecipeService recipeService;

        public RecipeController(IRecipeService recipeService)
        {
            this.recipeService = recipeService;
        }

        [HttpGet, Route]
        public List<Recipe> GetAll()
        {
            return recipeService.GetAll();
        }

        [HttpPost, Route("favorite")]
        public void Favorite(RecipeId recipeId)
        {
            //Need to add HttpResponseMessage
            recipeService.Favorite(recipeId);
        }

        [HttpDelete, Route("favorite")]
        public void DeleteFav(RecipeId recipeId)
        {
            //Need to add HttpResponseMessage
            recipeService.DeleteFav(recipeId);
        }

        [HttpPost, Route]
        public int Insert(RecipeInsert recipe)
        {
            return recipeService.Insert(recipe);
        }

        [HttpGet, Route]
        public List<Recipe> Search(string q)
        {
            return recipeService.Search(q);
        }
    }

}