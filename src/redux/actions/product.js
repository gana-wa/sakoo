import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const fetchProduct = () => {
   return {
      type: actions.fetchProduct,
      payload: api.fetchProduct(),
   };
};

export const fetchProductDetail = (id) => {
   return {
      type: actions.fetchProductDetail,
      payload: api.fetchProductDetail(id),
   };
};

export const addToCart = (data) => {
   return {
      type: actions.addToCart,
      payload: data,
   };
};

export const addProductToCart = (data) => {
   return {
      type: actions.addProductToCart,
      payload: data,
   };
};