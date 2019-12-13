export default class Font {
  constructor() {}

  // TODO: will add font size responsive (auto device detect)

  static textTransform(val){
    return {
      textTransform: val
    }
  }

  static fontStyle(val){
    return {
      fontStyle: val
    }
  }

  static textAlign(val){
    return {
      textAlign: val
    }
  }

  static textDecoration(val){
    return {
      textDecoration: val,
    }
  }

  static lineHeight(val){
    return {
      lineHeight: val,
    }
  }

  static fontWeight(val){
    return {
      fontWeight: val,
    }
  }
}
