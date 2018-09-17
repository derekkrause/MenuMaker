using System.Collections.Generic;
using MenuMaker.Models;

namespace MenuMaker.Services
{
    public interface IRecipeService
    {
        List<Recipe> GetAll();
        int Insert(RecipeInsert recipe);
    }
}