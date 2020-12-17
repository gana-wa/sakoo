import * as actions from '../actions/actionTypes';

const initialState = {
   product: [],
   productDetail: {},
   cart: [],
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
      // product detail -----------------------------------------------------------------
      case actions.fetchProductDetail + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.fetchProductDetail + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.fetchProductDetail + actions.fulfilled:
         return {
            ...state,
            isPending: false,
            isSuccess: true,
            isRejected: false,
            productDetail: action.payload.data.data,
         };
      // cart -----------------------------------------------------------------------
      case actions.addToCart:
         let newCart = [...state.cart];
         const indexStore = newCart.findIndex(item => {
            return item.store_id === action.payload[0].store_id
         });

         if (indexStore < 0) {
            newCart.push(action.payload[0]);
            return {
               ...state,
               isPending: false,
               isSuccess: true,
               isRejected: false,
               cart: newCart,
            };
         } else {
            const indexProduct = newCart[indexStore].products.findIndex(item => {
               return item.product_id === action.payload[0].products[0].product_id;
            });
            if (indexProduct < 0) {
               newCart[indexStore].products.push(action.payload[0].products[0])
               return {
                  ...state,
                  isPending: false,
                  isSuccess: true,
                  isRejected: false,
                  cart: newCart,
               }
            } else {
               newCart[indexStore].products[indexProduct] = {
                  ...newCart[indexStore].products[indexProduct],
                  stock: action.payload[0].products[0].stock + newCart[indexStore].products[indexProduct].stock,
               }
               return {
                  ...state,
                  isPending: false,
                  isSuccess: true,
                  isRejected: false,
                  cart: newCart,
               }
            }

         };
      default:
         return state;
   }
};

export default productReducer;