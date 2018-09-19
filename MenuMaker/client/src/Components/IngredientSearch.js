import React from "react";
import { Card, CardTitle, Input } from "reactstrap";

class IngredientSearch extends React.Component {
  state = {
    ingredients: [],
    ingredient: ""
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, this.state.ingredient], ingredient: "" });
    document.getElementById("ingredientInput").reset();
  };

  deleteItem = e => {
    let array = [...this.state.ingredients];
    let target = array.indexOf(e.target.name);
    array.splice(target, 1);
    this.setState({ ingredients: array });
  };

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <Card body outline>
          <CardTitle>
            Search Recipes
            <small> by ingredients</small>
          </CardTitle>
          <form id="ingredientInput">
            <div className="input-group">
              <Input
                type="text"
                className="form-control"
                name="ingredient"
                placeholder="Onion"
                onChange={this.onChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="submit" onClick={this.onClick}>
                  Add
                </button>
              </div>
            </div>
          </form>
          {ingredients.length > 0 && (
            <React.Fragment>
              <ul>
                {ingredients.map(ingredient => (
                  <li key={ingredient}>
                    {ingredient}
                    <a href="#" className="float-right" name={ingredient} onClick={this.deleteItem}>
                      erase
                    </a>
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline-success">find me something to make</button>
            </React.Fragment>
          )}
        </Card>
      </div>
    );
  }
}
export default IngredientSearch;
