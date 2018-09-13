import React from "react";
import { recipe_getAll, recipe_search } from "../server";
import { Card, CardTitle, Input, Button } from "reactstrap";

class IngredientSearch extends React.Component {
  render() {
    return (
      <div>
        <Card body outline>
          <CardTitle>
            Search Recipes
            <small> by ingredients</small>
          </CardTitle>
          <Input type="text" className="form-control" placeholder="Onion" />
        </Card>
      </div>
    );
  }
}
export default IngredientSearch;
