import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

class SearchResults extends React.Component {
  menuPicker = () => {
    const recipes = [];
    if (this.props.recipes.length != 1) {
      console.log("length != 1", this.props.recipes);
      recipes.push({
        title: "Jalapeno Popper Grilled Cheese Sandwich",
        image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
        recipe_id: 1,
        publisher: "Closet Cooking",
        f2f_url: "https://www.food2fork.com/view/Jalapeno_Popper_Grilled_Cheese_Sandwich/35382"
      });
      return recipes;
    } else {
      console.log("length = 1", this.props.recipes);
      return this.props.recipes.pop();
    }
  };

  render() {
    const menu = this.menuPicker();
    console.log("menu", menu);

    return (
      <div className="container-fluid">
        {menu &&
          menu.length > 0 &&
          menu.map(recipe => {
            return (
              <div>
                <Card key={recipe.recipe_id} className="m-4">
                  <CardImg top width="100%" src={recipe.image_url} />
                  <CardBody>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardSubtitle>{recipe.publisher}</CardSubtitle>
                    <a className="float-right" href={recipe.f2f_url}>
                      View Recipe
                    </a>
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

export default connect(mapStateToProps)(SearchResults);
