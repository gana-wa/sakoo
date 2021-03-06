import { ActionType } from "redux-promise-middleware";

export const pending = `${ActionType.Pending}`;
export const fulfilled = `_${ActionType.Fulfilled}`;
export const rejected = `_${ActionType.Rejected}`;

export const fetchProduct = 'PRODUCT_FETCHED';
export const fetchProductDetail = 'DETAIL_PRODUCT_FETCHED';
export const addToCart = 'ADD_TO_CART';
export const addProductToCart = 'ADD_PRODUCT_TO_CART';
export const fetchExpeditions = 'FETCH_EXPEDITIONS';
export const setExpedition = 'SET_EXPEDITION';
export const addTransaction = 'ADD_TRANSACTION';
export const clearState = 'CLEAR_STATE'
export const fetchTransaction = 'FETCH_TRANSACTION'
export const getMoreTransaction = 'GET_MORE_TRANSACTION'
