import { MODAL_STORE_DATA } from '../actions/types';

const initialState = {
  Modaldata: {
    link: '',
    title: ''
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_STORE_DATA:
      return {
        ...state,
        Modaldata: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;