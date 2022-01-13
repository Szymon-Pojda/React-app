import shortid from "shortid";
import strContains from '../utils/strContains';


// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFilteredFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return [...statePart, { ...action.newCard, id: shortid() }];
        case 'TOGGLE_CARD_FAVORITE':
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        case REMOVE_CARD:
            return statePart.filter(card => card.id !== action.payload)
        default:
            return statePart;
    }
}

export default cardsReducer