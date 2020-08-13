import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from 'modules/auth';
import loading from 'modules/loading';
// import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  // user,
});

export function* rootSaga() {
  yield all([authSaga() /* , usersaga() */]);
}

export default rootReducer;
