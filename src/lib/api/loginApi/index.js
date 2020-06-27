const { REACT_APP_API_BASE_URL } = process.env;

export const login = async ({ userId, password }) => {
  // console.log(userId, password);
  const req = new Request(`${REACT_APP_API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({
      userId,
      password,
    }),
  });
  const response = await fetch(req);
  // const data = await res.json();
  // jwt return 해야함
  if (response.status === 200) {
    return response;
  } else if (response.status !== 200) {
    throw new Error('로그인 실패');
  }
};
