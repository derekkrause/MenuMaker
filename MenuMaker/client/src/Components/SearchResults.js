import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

class SearchResults extends React.Component {
  menuPicker = () => {
    const recipes = [];
    if (this.props.recipes.length === 1) {
      recipes.push({
        title: "Jalapeno Popper Grilled Cheese Sandwich",
        image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
        recipe_id: 1,
        publisher: "Closet Cooking",
        source_url: "www.closetcooking.com",
        f2f_url: "https://www.food2fork.com/view/Jalapeno_Popper_Grilled_Cheese_Sandwich/35382"
      });
      return recipes;
    } else return this.props.recipes.pop();
  };

  render() {
    const menu = this.menuPicker;
    console.log(menu);

    return (
      <div className="container">
        {menu &&
          menu.map(recipe => {
            debugger;
            <Card key={recipe.recipe_id}>
              <CardImg top width="100%" src={recipe.image_url} />
              <CardBody>
                <CardTitle>{recipe.title}</CardTitle>
                {/* <CardSubtitle>{recipe.publisher}</CardSubtitle> */}
                {/* <CardText>{recipe.source_url}</CardText> */}
                {/* <button type="link" href={recipe.f2f_url}>{recipe.f2f_url}</button> */}
              </CardBody>
            </Card>;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

export default connect(mapStateToProps)(SearchResults);
