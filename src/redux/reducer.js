import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './types';

const reducer = (state = [], { type, payload }) => {
  console.log(payload);
  console.log('log: ', payload);
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: reducer,
  filter,
});
