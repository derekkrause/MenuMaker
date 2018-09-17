using System;

namespace MenuMaker.Models
{
    public class Recipe : RecipeInsert
    {
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}