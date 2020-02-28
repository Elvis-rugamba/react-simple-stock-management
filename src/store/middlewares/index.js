const validationMiddleware = ({ dispatch }) => next => action => {
  if (action.type === 'ADD_ITEM') {
    const { name, price } = action.payload;
    if (name === '')
      return dispatch({
        type: 'CREATE_ERROR',
        payload: { errors: { name: true } },
      });
    if (price === '')
      return dispatch({
        type: 'CREATE_ERROR',
        payload: { errors: { price: true } },
      });
  }
  return next(action);
};

export default validationMiddleware;
