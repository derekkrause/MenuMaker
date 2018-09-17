﻿using MenuMaker.Models;
using MenuMaker.Services;
using System.Collections.Generic;
using System.Web.Http;

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

        [HttpPost, Route]
        public int Insert(RecipeInsert recipe)
        {
            return recipeService.Insert(recipe);
        }
    }

}