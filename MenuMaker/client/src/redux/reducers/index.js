const initialState = {
  recipes: [],
  ingredients: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return { ...state, recipes: [...state.recipes, action.payload] };
    case "ADD_INGREDIENT":
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
