export default class Border {
  constructor() {
    // available styles
    // this.styles = ['solid', 'dotted', 'dashed'];

    // return this;
  }

  static b(width, color, style) {
    return {
      borderColor: color,
      borderWidth: width,
      borderStyle: style
    };
  }

  // BorderTop
  static bt(width, color){
    return {
      borderTopColor: color,
      borderTopWidth: width,
    }
  }

  // BorderBottom
  static bb(width, color){
    return {
      borderBottomColor: color,
      borderBottomWidth: width
    }
  }

  // BorderLeft
  static bl(width, color){
    return {
      borderLeftColor: color,
      borderLeftWidth: width
    }
  }

  // BorderRight
  static br(width, color){
    return {
      borderRightColor: color,
      borderRightWidth: width
    }
  }

  // Border Left & Right
  static bx(width, color){
    return {
      ...this.bl(width, color),
      ...this.br(width, color)
    }
  }

  // Border Top & Bottom
  static by(width, color){
    return {
      ...this.bb(width, color),
      ...this.bt(width, color)
    }
  }

  //unset borders
  static unset(direction){
    if(direction === 'top'){
      return {
        borderTopWidth: 0
      }
    }else if(direction === 'bottom'){
      return {
        borderBottomWidth: 0
      }
    }else if(direction === 'left'){
      return {
        borderLeftWidth: 0
      }
    }else if(direction === 'right'){
      return {
        borderRightWidth: 0
      }
    }else if(direction === 'x'){
      return {
        borderRightWidth: 0,
        borderLeftWidth: 0
      }
    }else if(direction === 'y'){
      return {
        borderTopWidth: 0,
        borderBottomWidth: 0
      }
    }else {
      return {
        borderWidth: 0
      }
    }
  }

  // Border Radius
  static rad(size){
    return {
      borderRadius: size
    }
  }

  // Radius top
  static radt(size){
    return {
      borderTopLeftRadius: size,
      borderTopRightRadius: size
    }
  }

  // Radius bottom
  static radb(size){
    return {
      borderBottomLeftRadius: size,
      borderBottomRightRadius: size
    }
  }

  // Radius left
  static radl(size){
    return {
      borderTopLeftRadius: size,
      borderBottomLeftRadius: size,
    }
  }

  // Radius right
  static radr(size){
    return {
      borderTopRightRadius: size,
      borderBottomRightRadius: size
    }
  }

  // Radius cross top left & bottom right
  static radcross(size){
    return {
      borderTopLeftRadius: size,
      borderBottomRightRadius: size
    }
  }

  // Radius cross top right & bottom left
  static radcross_rev(size){
    return {
      borderTopRightRadius: size,
      borderBottomLeftRadius: size
    }
  }
};

