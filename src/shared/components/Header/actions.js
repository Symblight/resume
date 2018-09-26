import { CHANGE_SELECTED_PAGE } from '../../constants'


export const changeSelectedPage = (index) => ({
  type: CHANGE_SELECTED_PAGE,
  payload: index,
})
