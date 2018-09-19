import React from "react";
import RecipeSearch from "./RecipeSearch";
import IngredientSearch from "./IngredientSearch";
import SearchResults from "./SearchResults";
import Favorites from "./Favorites";

class Body extends React.Component {
  render() {
    return (
      <div
        className="container-fluid mainContainer"
        style={{ backgroundImage: "url('https://image.ibb.co/i2ajS9/hardwood_material_rough_935875.jpg')" }}
      >
        <div className="mainBody">
          <div className="search">
            <RecipeSearch />
            <IngredientSearch />
            <Favorites />
          </div>
          <SearchResults {...this.props} />
        </div>
      </div>
    );
  }
}
export default Body;
