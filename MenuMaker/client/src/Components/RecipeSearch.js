import React from "react";
import { recipe_getAll, recipe_search } from "../server";
import { Card, CardTitle, Input, Button } from "reactstrap";

class RecipeSearch extends React.Component {
  state = {
    search: "",
    recipes: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  search = () => {
    if (this.state.search === "") {
      recipe_getAll().then(res => this.setState({ recipes: res.data }));
    } else {
      recipe_search(this.state.search, 1).then(res => console.log("search", res));
    }
  };

  render() {
    return (
      <div>
        <Card body outline>
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

export default RecipeSearch;
