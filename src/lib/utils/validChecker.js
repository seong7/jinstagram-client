class ValidChecker {
  constructor() {
    this.checkInfo = {
      userId: [
        { item: '영문 소문자 2자 이상', regexp: /[a-z]{1}[0-9]*[a-z]{1}/ },
        { item: '숫자 1자 이상', regexp: /[0-9]{1}/ },
      ],
      password: [
        { item: '영문 소문자 1자 이상', regexp: /[a-z]{1}/ },
        { item: '숫자 1자 이상', regexp: /[0-9]{1}/ },
      ],
      passwordCheck: [{ item: '비밀번호 일치' }],
    };

    this._password = undefined;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  check(key, value) {
    // console.log(key, value);
    switch (key) {
      case 'passwordCheck':
        return [
          {
            item: '비밀번호 일치',
            isValid: value !== '' && value === this._password,
          },
        ];

      case 'password':
        this._password = value;
        break;

      default:
        break;
    }
    return this.checkInfo[key].map((info) => {
      return { item: info.item, isValid: info.regexp.test(value) };
    });
  }
}

export default ValidChecker;
