import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_AUTH = 'auth/INITIALIZE_AUTH';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);
const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(
  'auth/JOIN'
);

export const changeField = createAction(
  // action type 과 payload 설정
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // userId, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);
export const initializeAuth = createAction(INITIALIZE_AUTH);
export const login = createAction(LOGIN, ({ userId, password }) => ({
  userId,
  password,
}));
export const join = createAction(JOIN, ({ userId, password }) => ({
  userId,
  password,
}));

// Saga 생성
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const joinSaga = createRequestSaga(JOIN, authAPI.join);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga); // takeLatest : 가장 마지막 실행된 작업만 수행(로그인을 여러번 눌러도 마지막 요청만 수행)
  yield takeLatest(JOIN, joinSaga);
}

const initialState = {
  login: {
    userId: '',
    password: '',
  },
  join: {
    userId: '',
    password: '',
    passwordCheck: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: { ...state[form], [key]: value },
    }),
    [INITIALIZE_AUTH]: (state) => ({
      ...state,
      auth: null,
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth: auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      auth: null,
    }),
    [JOIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth: auth,
    }),
    [JOIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      auth: null,
    }),
  },
  initialState
);

export default auth;
