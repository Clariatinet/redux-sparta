// 1. action item
const ADD_NUMBER = 'ADD_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

// 2. action creators
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};
// 3. initialState
const initialState = {
  number: 0,
};

// 4. reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 5. export
export default counter;
