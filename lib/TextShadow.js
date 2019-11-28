export default class TextShadow {
  constructor() {}

  static generate(horizantal, vertical, blurRadius, color) {
    return {
      textShadowColor: color,
      textShadowOffset: {width: horizantal, height: vertical},
      textShadowRadius: blurRadius
    };
  }
}
