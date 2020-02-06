import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga() {
    yield takeEvery('GET_ITEMS', getItems);
}

function* getItems() {
    let response = yield axios.get('/api/shelf');
    yield put({type: 'SET_ITEMS', payload: response.data})
}

export default itemSaga;