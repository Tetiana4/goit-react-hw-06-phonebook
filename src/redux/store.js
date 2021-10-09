import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { addContact } from './actions';
import reducer from './reducer';
// const initialState = {
//   contacts: '',
// };

const rootReducer = combineReducers({
  contacts: reducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;
