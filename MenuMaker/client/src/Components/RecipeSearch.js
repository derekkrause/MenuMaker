import React from "react";
import { recipe_getAll, recipe_search } from "../server";
import { Card, CardTitle, Input, Button } from "reactstrap";

class RecipeSearch extends React.Component {
  render() {
    return (
      <div>
        <Card body outline>
          <CardTitle>
            Search Recipes
            <small> by keyword</small>
          </CardTitle>
          <div className="input-group">
            <Input type="text" className="form-control" placeholder="Spaghetti" />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                Go
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default RecipeSearch;
