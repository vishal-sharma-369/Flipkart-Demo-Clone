import { combineReducers, applyMiddleware, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";
const middleware = [thunk];

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
