import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import listsReducer, { ADD_LIST } from './listsReducer';
import columnsReducer, { ADD_COLUMN } from './columnsReducer';
import cardsReducer, { ADD_CARD, REMOVE_CARD, TOGGLE_CARD_FAVORITE } from './cardsReducer';
import searchStringReducer from './searchStringReducer';

export const addColumn = newColumn => ({ type: ADD_COLUMN, newColumn });

export const addCard = newCard => ({ type: ADD_CARD, newCard });

export const addList = payload => ({ type: ADD_LIST, payload });

export const getSearchString = payload => ({ type: 'app/cards/UPDATE_SEARCHSTRING', payload });

export const getToggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

export const removeCard = payload => ({type: REMOVE_CARD, payload})

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;