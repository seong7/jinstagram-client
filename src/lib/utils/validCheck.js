let password; // 비밀번호 저장

const regex = {
  userId: [{ regex: /[a-z]{2}/ }, { regex: /[0-9]{1}/ }],
  password: [{ regex: /[a-z]{1}/ }, { regex: /[0-9]{1}/ }],
  passwordCheck: [{ item: '비밀번호 일치' }],
};

export const validCheck = (items, { key, value }) => {
  console.log(items, key, value);
  switch (key) {
    case 'passwordCheck':
      return [{ item: '비밀번호 일치', isValid: value === password }];

    case 'password':
      password = value;

    default:
      return regex[key].map((c, i) => {
        const pattern = new RegExp(c.regex, 'g');
        return { item: items[i].item, isValid: pattern.test(value) };
      });
  }
};
