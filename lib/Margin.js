export default class Margin {
  constructor() {}

  static mx(val) {
    return {
      marginLeft: val,
      marginRight: val,
    };
  }

  static my(val) {
    return {
      marginTop: val,
      marginBottom: val,
    };
  }

  static m(val) {
    return {
      margin: val,
    };
  }

  static mt(val) {
    return {
      marginTop: val,
    };
  }

  static mb(val) {
    return {
      marginBottom: val,
    };
  }
  static ml(val) {
    return {
      marginLeft: val,
    };
  }
  static mr(val) {
    return {
      marginRight: val,
    };
  }
}
