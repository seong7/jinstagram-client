const { REACT_APP_API_BASE_URL } = process.env;

export const login = async (username, password) => {
  const req = new Request(`${REACT_APP_API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({
      username,
      password,
    }),
  });
  try {
    const res = await fetch(req);
    const data = await res.json();
    // jwt return 해야함
  } catch (e) {
    throw e;
  }
};
