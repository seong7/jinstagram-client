const { REACT_APP_PROXY, REACT_APP_API_BASE_URL } = process.env;

const proxy = REACT_APP_PROXY;
const url = REACT_APP_API_BASE_URL;

/**
 * @param {string} method method of http request
 * @param {string} requestType type of action
 * @param {Object} data data Object to set into request body
 * @return {Request}
 */
const setAuthRequest = (method, requestType, data) =>
  new Request(`${proxy}/${url}/api/auth/${requestType}`, {
    method,
    mode: 'cors',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(data),
  });

/**
 * @param {Object} loginInfo
 * @param {string} loginInfo.userId
 * @param {number} loginInfo.password
 * @return {Response}
 */
export const login = async ({ userId, password }) => {
  // console.log(userId, password);
  const response = await fetch(
    setAuthRequest('post', 'login', { userId, password })
  );
  if (response.status === 200) {
    console.log(response);
    return response;
  } else if (response.status !== 200) {
    const message = await response.text(); // response.body (ReadableStream) 를 string 형태로 parsing
    throw new Error(message);
  }
  return response;
};

/**
 * @param {Object} JoinInfo
 * @param {string} JoinInfo.userId
 * @param {number} JoinInfo.password
 * @return {Response}
 */
export const join = async ({ userId, password }) => {
  const response = await fetch(
    setAuthRequest('post', 'join', { userId, password })
  );
  // console.log(response);
  if (response.status === 200) {
    return response;
  } else if (response.status !== 200) {
    const message = await response.text();
    throw new Error(message);
  }
  return response;
};

export const check = async () => {
  await fetch(setAuthRequest('get', 'check'));
};

export const logout = async () => {
  await fetch(setAuthRequest('post', 'logout'));
};
