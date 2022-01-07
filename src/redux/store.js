import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// action creators
export const getAllColumns = ({columns}) => columns;

export const addColumn = newColumn => ({ type: 'ADD_COLUMN', newColumn });

export const addCard = newCard => ({ type: 'ADD_CARD', newCard});

export const addList = payload => ({ type: 'ADD_LIST', payload});

export const getSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId)

export const getAllLists = ({ lists }) => lists;

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