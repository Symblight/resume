import { CHANGE_SELECTED_PAGE } from '../../constants';

export const changeSelectedPage = (index) => {
    return {
        type: CHANGE_SELECTED_PAGE,
        payload: index
    }
}