import * as actions from '../actions/actionTypes';

const initialState = {
   product: [],
   productDetail: {},
   cart: [],
   shipment: [],
   transaction: [],
   message: '',
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
      // exped --------------------------------------------------------------------
      case actions.fetchExpeditions + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.fetchExpeditions + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.fetchExpeditions + actions.fulfilled:
         return {
            ...state,
            isPending: false,
            isSuccess: true,
            isRejected: false,
            shipment: action.payload.data.data,
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
      // set expediton ------------------------------------
      case actions.setExpedition:
         let newCartExpedition = [...state.cart]
         const indexStoreExpedition = newCartExpedition.findIndex(item => {
            return item.store_id === action.payload.store_id
         });
         newCartExpedition[indexStoreExpedition].expedition_id = action.payload.expedition_id
         newCartExpedition[indexStoreExpedition].expedition_price = action.payload.expedition_price
         return {
            ...state,
            cart: newCartExpedition,
         }
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
            const indexProduct = newCart[indexStore].data.findIndex(item => {
               return item.product_id === action.payload[0].data[0].product_id;
            });
            if (indexProduct < 0) {
               newCart[indexStore].data.push(action.payload[0].data[0])
               return {
                  ...state,
                  isPending: false,
                  isSuccess: true,
                  isRejected: false,
                  cart: newCart,
               }
            } else {
               newCart[indexStore].data[indexProduct] = {
                  ...newCart[indexStore].data[indexProduct],
                  stock: action.payload[0].data[0].stock + newCart[indexStore].data[indexProduct].stock,
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
      // transaction -------------------------------------
      case actions.addTransaction + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.addTransaction + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.addTransaction + actions.fulfilled:
         if (action.payload.data.message === 'create transaction') {
            return {
               ...state,
               isPending: false,
               isSuccess: true,
               isRejected: false,
               message: 'Transaksi Berhasil',
            };
         } else {
            return {
               ...state,
               isPending: false,
               isSuccess: false,
               isRejected: false,
               message: 'Transaksi Gagal',
            };
         }
      // clear ------------------------------------
      case actions.clearState:
         return {
            ...state,
            productDetail: {},
            cart: [],
            message: '',
            isPending: false,
            isSuccess: false,
            isRejected: false,
         }
      // list transaction ------------------------------------------------
      case actions.fetchTransaction + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.fetchTransaction + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.fetchTransaction + actions.fulfilled:
         return {
            ...state,
            isPending: false,
            isSuccess: true,
            isRejected: false,
            transaction: action.payload.data.data,
         };
      // -----------
      case actions.getMoreTransaction + actions.pending:
         return {
            ...state,
            isPending: true,
            isSuccess: false,
            isRejected: false,
         };
      case actions.getMoreTransaction + actions.rejected:
         return {
            ...state,
            isPending: false,
            isSuccess: false,
            isRejected: true,
         };
      case actions.getMoreTransaction + actions.fulfilled:
         return {
            ...state,
            isPending: false,
            isSuccess: true,
            isRejected: false,
            transaction: state.transaction.concat(action.payload.data.data),
         };
      default:
         return state;
   }
};

export default productReducer;