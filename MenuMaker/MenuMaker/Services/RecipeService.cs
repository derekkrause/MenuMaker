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
                            Title = (string)reader["title"],
                            Ingredient = (string)reader["ingredient"],
                            DateCreated = (DateTime)reader["dateCreated"],
                            DateModified = (DateTime)reader["dateModified"]
                        };

                        recipes.Add(recipe);
                    }
                    return recipes;
                }
            }
        }

        public int Create(RecipeCreate request)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "Recipe_Create";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@title", request.Title);
                cmd.Parameters.AddWithValue("@ingredient", request.Ingredient);
                cmd.Parameters.Add("@id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@id"].Value;
            }
        }

        public int Create()
        {
            throw new NotImplementedException();
        }
    }
}