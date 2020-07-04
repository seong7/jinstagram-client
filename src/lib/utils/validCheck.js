let password; // 비밀번호 저장

const regexp = {
  userId: [/[a-z]{1}[0-9]*[a-z]{1}/, /[0-9]{1}/],
  password: [/[a-z]{1}/, /[0-9]{1}/],
  passwordCheck: [],
};

export const validCheck = (items, { key, value }) => {
  // console.log(items, key, value);
  switch (key) {
    case 'passwordCheck':
      return [
        { item: '비밀번호 일치', isValid: value !== '' && value === password },
      ];

    case 'password':
      password = value;
      break;

    default:
      break;
  }
  return regexp[key].map((c, i) => {
    const pattern = new RegExp(c, 'g');
    return { item: items[i].item, isValid: pattern.test(value) };
  });
};
