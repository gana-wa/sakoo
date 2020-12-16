import * as actions from '../actions/actionTypes';

const initialState = {
   product: [],
   isPending: false,
   isSuccess: false,
   isRejected: false,
}

const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.fetchProduct + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.fetchProduct + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.fetchProduct + actions.fulfilled:
         return {
            ...state,
            isPending: false,
            isSuccess: true,
            isRejected: false,
            product: action.payload.data.data,
         };
      default:
         return state;
   }
};

export default productReducer;