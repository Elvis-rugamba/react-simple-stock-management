import { ADD_ITEM, CREATE_ERROR, DELETE_ITEM } from '../constants/action-types';

const initialState = {
  items: [
    { id: 1, name: 'iPhone S11', price: '9000$' },
    { id: 2, name: 'Samsung S8', price: '8000$' },
  ],
  errors: { name: false, price: false },
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat({
          id: state.items[state.items.length - 1].id + 1,
          ...payload,
        }),
      };
    case CREATE_ERROR:
      return { ...state, errors: { ...state.errors, ...payload.errors } };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, i) => {
          return i !== payload;
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
