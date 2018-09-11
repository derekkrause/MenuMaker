using System.ComponentModel.DataAnnotations;

namespace MenuMaker.Models
{
    public class RecipeCreate
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Ingredient { get; set; }
    }
}