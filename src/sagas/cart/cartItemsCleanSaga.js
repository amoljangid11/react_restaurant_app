import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

function* cartItemsClean(action) {
  try {
    const newCart = [];

    yield call(AsyncStorage.removeItem, 'userCart');

    yield put({ type: 'SAVE_NEW_CART', payload: newCart });
  } catch (e) {
    console.log(e);
  }
}

/**
 * Saga to handle action CLEAN_CART_ITEMS
 */
function* cartItemsCleanSaga() {
  yield takeLatest('CLEAN_CART_ITEMS', cartItemsClean);
}

export default cartItemsCleanSaga;
