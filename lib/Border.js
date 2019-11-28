export default class Border {
  constructor() {
    // available styles
    this.styles = ['solid', 'dotted', 'dashed'];

    return this;
  }

  static color(color) {
    return {
      borderColor: color,
    };
  }
};

