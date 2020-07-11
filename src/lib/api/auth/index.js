const { REACT_APP_PROXY, REACT_APP_API_BASE_URL } = process.env;

/**
 * @param {string} type type of action
 * @param {Object} data data Object to set into request body
 * @return {Request}
 */
const setRequest = (type, data) =>
  new Request(`${REACT_APP_PROXY}/${REACT_APP_API_BASE_URL}/api/auth/${type}`, {
    method: 'POST',
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
  const response = await fetch(setRequest('login', { userId, password }));
  if (response.status === 200) {
    console.log(response);
    return response;
  } else if (response.status !== 200) {
    const message = await response.text(); // response.body (ReadableStream) 를 string 형태로 parsing
    throw new Error(message);
  }
};

/**
 * @param {Object} JoinInfo
 * @param {string} JoinInfo.userId
 * @param {number} JoinInfo.password
 * @return {Response}
 */
export const join = async ({ userId, password }) => {
  const response = await fetch(setRequest('join', { userId, password }));
  // console.log(response);
  if (response.status === 200) {
    return response;
  } else if (response.status !== 200) {
    const message = await response.text();
    throw new Error(message);
  }
};
