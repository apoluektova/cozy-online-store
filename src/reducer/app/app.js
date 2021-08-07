const initialState = {
  category: null
};

const ActionType = {
  CHANGE_CATEGORY: `CHANGE_CATEGORY`
}

const ActionCreator = {
  changeCategory: (category) => {
    return {
      type: ActionType.CHANGE_CATEGORY,
      payload: category
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CATEGORY):
      return {
        ...state,
        category: action.payload
      }
  }

  return state;
};

export {reducer, ActionCreator, ActionType, initialState};
