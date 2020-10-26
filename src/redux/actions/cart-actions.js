import cartTypes from '../types/cart-types';
import * as productService from '../../services/product-service';


/** Product actions -------------------------------- */

export const startLoadingProducts = () => {
  return async( dispatch ) => {
      const products = await productService.findAll();
      dispatch( setProducts( products ) );
  }
}

export const setProducts = ( products ) => ({
  type: cartTypes.productsLoad,
  payload: products
});

/** Cart actions ----------------------------------- */

export const addToCart = (itemID) => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: cartTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: cartTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
