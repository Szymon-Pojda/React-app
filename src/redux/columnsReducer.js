import shortid from "shortid";

// selectors
export const getAllColumns = ({ columns }) => columns;
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId)

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN')

// action creators
const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
          console.log('[...statePart, { ...action.newColumn, id: shortid() }]', [...statePart, { ...action.newColumn, id: shortid() }])
        return [...statePart, { ...action.newColumn, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer