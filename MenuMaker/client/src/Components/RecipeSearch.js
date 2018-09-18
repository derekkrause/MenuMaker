import React from "react";
import { connect } from "react-redux";
import { recipe_getAll, recipe_search, recipe_search_sql } from "../server";
import { Card, CardTitle, Input } from "reactstrap";

class RecipeSearch extends React.Component {
  state = {
    search: "",
    recipes: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = e => {
    e.preventDefault();
    if (this.state.search === "") {
      recipe_getAll().then(res => {
        if (res.data.error) {
          debugger;
          recipe_search_sql("").then(res => this.setState({ recipes: res.data }, this.sendStateToProps));
        } else {
          debugger;
          this.setState({ recipes: res.data.recipes }, this.sendStateToProps);
        }
      });
    } else {
      recipe_search(this.state.search, 1).then(res => {
        if (res.data.error) {
          recipe_search_sql(this.state.search).then(res => this.setState({ recipes: res.data }, this.sendStateToProps));
        } else this.setState({ recipes: res.data.recipes }, this.sendStateToProps);
      });
    }
  };

  sendStateToProps = () => {
    this.props.addRecipe(this.state.recipes);
  };

  render() {
    return (
      <div>
        <Card body outline className="search">
          <CardTitle>
            Search Recipes
            <small> by keyword</small>
          </CardTitle>
          <form type="submit" onSubmit={this.search}>
            <div className="input-group">
              <Input
                type="text"
                className="form-control"
                name="search"
                placeholder="Spaghetti"
                onChange={this.onChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" onClick={this.search}>
                  Go
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRecipe: recipe => dispatch({ type: "ADD_RECIPE", payload: recipe })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(RecipeSearch);
