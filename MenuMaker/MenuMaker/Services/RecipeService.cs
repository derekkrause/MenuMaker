using MenuMaker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace MenuMaker.Services
{
    public class RecipeService : IRecipeService
    {
        //helper method to create and open a database connection
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["Recipes"].ConnectionString);
            con.Open();
            return con;
        }

        public List<Recipe> GetAll()
        {
            using (var con = GetConnection()) //ensures connection is closed after the call is made. Calls con.Dispose().
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Recipe_GetAll";
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
                {
                    var recipes = new List<Recipe>();

                    while (reader.Read())
                    {
                        var recipe = new Recipe
                        {
                            Id = (int)reader["id"],
                            Publisher = (string)reader["publisher"],
                            F2f_url = (string)reader["f2f_url"],
                            Title = (string)reader["title"],
                            Source_url = (string)reader["source_url"],
                            Recipe_id = (string)reader["recipe_id"],
                            Image_url = (string)reader["image_url"],
                            Publisher_url = (string)reader["publisher_url"]
                        };

                        recipes.Add(recipe);
                    }
                    return recipes;
                }
            }
        }

        public List<Recipe> Search(string q)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Recipe_Search";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Search", q);

                using (var reader = cmd.ExecuteReader())
                {
                    var recipes = new List<Recipe>();

                    while (reader.Read())
                    {
                        var recipe = new Recipe
                        {
                            Id = (int)reader["id"],
                            Publisher = (string)reader["publisher"],
                            F2f_url = (string)reader["f2f_url"],
                            Title = (string)reader["title"],
                            Source_url = (string)reader["source_url"],
                            Recipe_id = (string)reader["recipe_id"],
                            Image_url = (string)reader["image_url"],
                            Publisher_url = (string)reader["publisher_url"]
                        };

                        recipes.Add(recipe);
                    }
                    return recipes;
                }
            }
        }

        public int Insert(RecipeInsert recipe)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "RECIPE_INSERT";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@publisher", recipe.Publisher);
                cmd.Parameters.AddWithValue("@f2f_url", recipe.F2f_url);
                cmd.Parameters.AddWithValue("@title", recipe.Title);
                cmd.Parameters.AddWithValue("@source_url", recipe.Source_url);
                cmd.Parameters.AddWithValue("@recipe_id", recipe.Recipe_id);
                cmd.Parameters.AddWithValue("@image_url", recipe.Image_url);
                cmd.Parameters.AddWithValue("@publisher_url", recipe.Publisher_url);
                cmd.Parameters.Add("@id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@id"].Value;
            }
        }

        public void Favorite(RecipeId recipeId)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Add_Favorite";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@recipeId", recipeId.recipeId);
                try
                {
                    cmd.ExecuteNonQuery();
                }
                catch (SqlException e) when (e.Message.Contains("duplicate"))
                {

                }
            }
        }

        public void DeleteFav(RecipeId recipeId)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Delete_Favorite";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@recipeId", recipeId.recipeId);

                cmd.ExecuteNonQuery();
            }
        }
    }
}