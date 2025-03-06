import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import personalHomepageReducer from '../features/personalHomepage/personalHomepageSlice';
import themeReducer from '../common/themeSlice';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  // middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;