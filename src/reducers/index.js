import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import foodsReducer from './foodsReducer';
import cartReducer from './cart';
import ordersReducer from './ordersReducer';

const authPersistConfig = {
  key: 'auth',
  AsyncStorage,
  whitelist: ['loginMessage'],
  stateReconciler: autoMergeLevel2,
};

const cartPersistConfig = {
  key: 'cart',
  AsyncStorage,
  whitelist: ['cartData'],
  stateReconciler: autoMergeLevel2,
};

const foodPersistConfig = {
  key: 'food',
  AsyncStorage,
  blacklist: ['cuisineTypesError'],
  stateReconciler: autoMergeLevel2,
};

const restaPersistConfig = {
  key: 'restaurant',
  AsyncStorage,
  blacklist: ['cuisineRestaurantError', 'error', 'cuisineRestaurants', 'restaurantInfo'],
  stateReconciler: autoMergeLevel2,
};

const orderPersistConfig = {
  key: 'orders',
  AsyncStorage,
  whitelist: ['ordersList'],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  restaurant: persistReducer(restaPersistConfig, restaurantReducer),
  food: persistReducer(foodPersistConfig, foodsReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
  orders: persistReducer(orderPersistConfig, ordersReducer),
});

export default rootReducer;
