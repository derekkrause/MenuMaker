using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using MenuMaker.Models;
using MenuMaker.Services;

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
        public int Create(RecipeCreate recipe)
        {
            return recipeService.Create(recipe);
        }
    }
}