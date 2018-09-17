using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MenuMaker.Models
{
    public class RecipeInsert
    {
        [Required]
        public int Id { get; set; }
        public string Publisher { get; set; }
        public string F2f_url { get; set; }
        public string Title { get; set; }
        public string Source_url { get; set; }
        public string Recipe_id { get; set; }
        public string Image_url { get; set; }
        public string Publisher_url { get; set; }
    }
}