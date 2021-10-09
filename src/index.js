import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import store from './redux/store';
import { myAction, myAction2 } from './redux/actions';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

console.log(store);
console.log(store.getState());
store.dispatch(myAction(6));
store.dispatch(myAction2);
