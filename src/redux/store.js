import { createStore } from 'redux';
import initialState from './initialState';


const reducer = (state, action, shortid) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    default:
      return state;
      
    case 'ADD_CARD':
      return { ...state, card: [...state.card, { ...action.payload, id: shortid() }] };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;