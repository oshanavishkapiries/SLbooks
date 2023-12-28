import { MODAL_STORE_DATA } from './types';

export const storeData = (data) => {
  return {
    type: MODAL_STORE_DATA,
    payload: data,
  };
};