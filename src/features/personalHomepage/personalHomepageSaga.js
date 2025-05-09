import { call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError, toggleSkillsView } from './personalHomepageSlice';
import { getRepositories } from './personalHomepageApi';

const loadingDelay = 500;

function* fetchRepositoriesHandler(action) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, action.payload);    
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError(error.toString()));
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}

function* handleToggleSkillsView() {
  yield put(toggleSkillsView());
}

export function* toggleSkillsViewSaga() {
  yield takeEvery('personalHomepage/toggleSkillsViewSaga', handleToggleSkillsView);
}