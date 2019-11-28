export default class Padding {
  constructor() {}

  static px(val) {
    return {
      paddingLeft: val,
      paddingRight: val,
    };
  }

  static py(val) {
    return {
      paddingTop: val,
      paddingBottom: val,
    };
  }

  static p(val) {
    return {
      padding: val,
    };
  }

  static pt(val) {
    return {
      paddingTop: val,
    };
  }

  static pb(val) {
    return {
      paddingBottom: val,
    };
  }
  static pl(val) {
    return {
      paddingLeft: val,
    };
  }
  static pr(val) {
    return {
      paddingRight: val,
    };
  }
}
