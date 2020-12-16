import Axios from 'axios';
import * as actions from './actionTypes';
import * as api from '../../utils/linkAPI';

export const fetchProduct = () => {
   return {
      type: actions.fetchProduct,
      payload: api.fetchProduct(),
   };
};