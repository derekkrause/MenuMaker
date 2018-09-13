import React from "react";
import RecipeSearch from "./RecipeSearch";
import IngredientSearch from "./IngredientSearch";

class Body extends React.Component {
  render() {
    return (
      <div
        className="container-fluid mainContainer"
        style={{ backgroundImage: "url('https://image.ibb.co/i2ajS9/hardwood_material_rough_935875.jpg')" }}
      >
        <div className="mainBody">
          <RecipeSearch />
          <IngredientSearch />
        </div>
      </div>
    );
  }
}
export default Body;
