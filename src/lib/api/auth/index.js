const { REACT_APP_API_BASE_URL } = process.env;

const authReq = (type, body) =>
  new Request(`${REACT_APP_API_BASE_URL}/api/auth/${type}`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(body),
  });

export const login = async ({ userId, password }) => {
  // console.log(userId, password);
  const response = await fetch(authReq('login', { userId, password }));
  // jwt return 해야함
  if (response.status === 200) {
    return response;
  } else if (response.status !== 200) {
    const message = await response.text(); // response.body (ReadableStream) 를 string 형태로 parsing
    if (message === 'ID not found') {
      throw new Error('ID not found');
    } else if (message === 'Password not correct') {
      throw new Error('Password not correct');
    }
  }
};

export const join = async ({ userId, password }) => {
  const response = await fetch(authReq('join', { userId, password }));
  console.log(response);
  if (response.status === 200) {
    const result = await response.text();
    return result;
  }
};
