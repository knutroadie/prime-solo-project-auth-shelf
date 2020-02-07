import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* itemSaga() {
    yield takeEvery('GET_ITEMS', getItems);
    yield takeEvery('ADD_NEW_ITEM', addNewItem);
    yield takeEvery('DELETE_ITEMS', deleteItem);
}

function* getItems() {
    let response = yield axios.get('/api/shelf');
    yield put({type: 'SET_ITEMS', payload: response.data});
}

function* addNewItem(action) {
    yield axios.post('/api/shelf', action.payload);
    put({type: 'GET_ITEMS'});
}

function* deleteItem(action) {
    console.log('action.payload delete item', action.payload);
    let id = action.payload.id;
    yield axios.delete(`/api/shelf/${id}`, action.payload);
}

export default itemSaga;