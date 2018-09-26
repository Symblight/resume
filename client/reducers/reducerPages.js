import { CHANGE_SELECTED_PAGE } from '../constants'


const initialState = {
  selectedIndex: 0,
  tabs: [
    {
      id: 0,
      label: 'About',
    },
    {
      id: 1,
      label: 'Contacts',
    },
  ],
}

export const reducerPage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_PAGE: {
      return {
        ...state,
        selectedIndex: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
