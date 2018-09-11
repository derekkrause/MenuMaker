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
        readonly RecipeService recipeService = new RecipeService();

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