import React from "react";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  state = {
    recipes: []
  };

  render() {
    const { recipes } = this.state;
    return <div />;
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

export default connect(mapStateToProps)(SearchResults);
