import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

// Action Type 생성 함수
export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // action dispatch
    try {
      const response = yield call(request, action.payload);
      // call : Promise를 반환하는 함수를 호출하고 기다림.
      // 첫 번째 파라미터 : 함수, 나머지 파라미터 : 해당 함수에 넣을 인수
      yield put({
        type: SUCCESS,
        payload: response,
        meta: response,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
