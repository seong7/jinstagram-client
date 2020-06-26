import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActiontypes(
  'auth/LOGIN'
)

export const login = createAction(LOGIN, ({usename, password}) => ({
  username,
  password
}));

const initialState = {
  login: {
    username: '',
    password: ''
  },
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS] : (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [LOGIN_FAILURE] : (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
)

export default auth;