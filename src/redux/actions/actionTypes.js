import { ActionType } from "redux-promise-middleware";

export const pending = `${ActionType.Pending}`;
export const fulfilled = `_${ActionType.Fulfilled}`;
export const rejected = `_${ActionType.Rejected}`;

export const fetchProduct = 'PRODUCT_FETCHED';
export const fetchProductDetail = 'DETAIL_PRODUCT_FETCHED';