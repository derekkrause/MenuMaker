using AngleSharp.Parser.Html;
using System;
using System.Collections.Generic;
using System.Net;

namespace Scraper
{
    class Program
    {
        static void Main(string[] args)
        {
            var ingredients = new List<ScraperString>();

            //1. Download the html for the page
            var url = "https://simple.wikipedia.org/wiki/List_of_vegetables";

            var webClient = new WebClient();
            var html = webClient.DownloadString(url);

            //2. use CSS selectors to find the data
            var parser = new HtmlParser();
            var document = parser.Parse(html);
            var ingredientList = document.QuerySelector(".mw-content-ltr");

            //3. Loop over the data and create objects for the data
            var ingredientItem = ingredientList.QuerySelectorAll("li");

            foreach (var item in ingredientItem)
            {
                var scraperString = new ScraperString();
                scraperString.Name = item.TextContent;
                ingredients.Add(scraperString);
            }

            //4. Print ingredients
            foreach (var ingredient in ingredients)
            {
                Console.WriteLine($"{ingredient.Name}");
            }
            Console.Read();
        }
    }
}
