import cartReducer from './cart';
import catalogReducer from './catalog';
import localStorageReducer from './localStorage';
import topSalesReducer from './topSales';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    localStorage: localStorageReducer,
    topSales: topSalesReducer,
});

export default rootReducer;