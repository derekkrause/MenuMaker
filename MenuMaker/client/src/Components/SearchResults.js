import React from "react";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../server";
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

class SearchResults extends React.Component {
  menuPicker = () => {
    console.log(this.props);
    if (this.props.recipes && this.props.recipes.length === 1) {
      return this.props.recipes.pop();
    } else return [];
  };

  addFavoriteRecipe = recipe => {
    const favorite = { recipeId: recipe };
    addFavorite(favorite)
      .then(() => {
        console.log("favorite", recipe);
        this.props.addFavoriteToStore(favorite);
      })
      .catch(console.log("already a favorite"));
  };

  removeFavorite = recipe => {
    const favorite = { recipeId: recipe };
    deleteFavorite(favorite)
      .then(() => {
        console.log("Favorite removed", recipe);
        this.props.removeFavoriteFromStore(favorite);
      })
      .catch(console.log("unable to remove"));
  };

  render() {
    const menu = this.menuPicker();
    console.log("menu", menu);

    return (
      <div className="container-fluid results">
        {menu &&
          menu.length > 0 &&
          menu.map(recipe => {
            return (
              <div className="result" key={recipe.recipe_id}>
                <Card>
                  <CardImg top width="100%" src={recipe.image_url} />
                  <CardBody>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardSubtitle>{recipe.publisher}</CardSubtitle>
                    <div className="links">
                      <small>
                        <button
                          type="button"
                          className="btn btn-favorite"
                          onClick={() => this.addFavoriteRecipe(recipe.recipe_id)}
                        >
                          Add to Favorites
                        </button>
                      </small>
                      <small>
                        <a href={recipe.f2f_url} target="_blank">
                          View Recipe
                        </a>
                      </small>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavoriteToStore: recipe => dispatch({ type: "ADD_FAVORITE", payload: recipe }),
    removeFavoriteFromStore: recipe => dispatch({ type: "REMOVE_FAVORITE", payload: recipe })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
