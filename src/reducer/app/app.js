const initialState = {
  category: null,
  priceRange: {},
  sortingType: null,
};

const ActionType = {
  CHANGE_CATEGORY: `CHANGE_CATEGORY`,
  CHANGE_PRICE_RANGE: `CHANGE_PRICE_RANGE`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
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
  },
  changeSortingType: (sortingType) => {
    return {
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: sortingType
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
    case (ActionType.CHANGE_SORTING_TYPE):
      return {
        ...state,
        sortingType: action.payload
      }
  }

  return state;
};

export {reducer, ActionCreator, ActionType, initialState};
