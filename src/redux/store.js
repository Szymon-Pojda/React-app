import initialState from './initialState';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

export const addColumn = newColumn => ({ type: 'app/columns/ADD_COLUMN', newColumn });

export const addCard = newCard => ({ type: 'app/cards/ADD_CARD', newCard });

export const addList = payload => ({ type: 'app/lists/ADD_LIST', payload });

export const getSearchString = payload => ({ type: 'app/cards/UPDATE_SEARCHSTRING', payload });

export const getToggleCardFavorite = payload => ({ type: 'app/cards/TOGGLE_CARD_FAVORITE', payload });

export const removeCard = payload => ({type: 'app/cards/REMOVE_CARD', payload})

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