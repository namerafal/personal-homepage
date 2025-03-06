import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './personalHomepageSlice';
import axios from 'axios';

const loadingDelay = 500;

function* fetchRepositoriesHandler(action) {
  try {
    yield delay(loadingDelay); // Simulate loading delay for demo
    const response = yield call(axios.get, `https://api.github.com/users/${action.payload}/repos`);    
    yield put(fetchRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchRepositoriesError(error.toString()));
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
