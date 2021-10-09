import { combineReducers } from 'redux';
import { ADD, DELETE } from './types';

const reducer = (state = [], { type, payload }) => {
  console.log(payload);
  console.log('log: ', payload);
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  contacts: reducer,
});
