const initialState = {
  category: null,
  priceRange: {},
};

const ActionType = {
  CHANGE_CATEGORY: `CHANGE_CATEGORY`,
  CHANGE_PRICE_RANGE: `CHANGE_PRICE_RANGE`
}

const ActionCreator = {
  changeCategory: (category) => {
    return {
      type: ActionType.CHANGE_CATEGORY,
      payload: category
    };
  },
  changePriceRange: (priceRange) => {
    return {
      type: ActionType.CHANGE_PRICE_RANGE,
      payload: priceRange
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CATEGORY):
      return {
        ...state,
        category: action.payload
      }
    case (ActionType.CHANGE_PRICE_RANGE):
      return {
        ...state,
        priceRange: action.payload
      }
  }

  return state;
};

export {reducer, ActionCreator, ActionType, initialState};
