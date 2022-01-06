import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

//selectors

export const getFilteredCards = ({ cards,searchString },columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      console.log('add columns', action);
      return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };


    case 'ADD_CARD':
      console.log('add cards', { ...state, cards: [...state.cards, { ...action.newCard, id: shortid() }] });
      return { ...state, cards: [...state.cards, { ...action.newCard, id: shortid() }] };

    case 'UPDATE_SEARCHSTRING':
      console.log('update searchString', { ...state, searchString: action.payload });
      return { ...state, searchString: action.payload };

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