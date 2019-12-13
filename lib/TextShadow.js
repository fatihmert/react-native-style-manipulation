export default class TextShadow {
  constructor() {}

  static generate(horizontal, vertical, blurRadius, color) {
    return {
      textShadowColor: color,
      textShadowOffset: {width: horizontal, height: vertical},
      textShadowRadius: blurRadius
    };
  }
}
