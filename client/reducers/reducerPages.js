import { CHANGE_SELECTED_PAGE } from '../constants';

let initialState = {
  selectedIndex: 0,
  tabs: [
    {
      id: 0,
      label: 'Обо мне'
    },
    {
      id: 1,
      label: 'Контакты'
    }
  ]
};

export const reducerPage = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_SELECTED_PAGE: {
      return {
        ...state,
        selectedIndex: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  
}
};