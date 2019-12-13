export default class Position {
  constructor() {}

  static position(name){
    if(name === 'relative'){ //rn default pos
      return {
        position: 'relative'
      }
    }
    return {
      position: 'absolute'
    }
  }

  static top(val){
    return {
      top: val,
    }
  }

  static bottom(val){
    return {
      bottom: val,
    }
  }

  static left(val){
    return {
      left: val,
    }
  }

  static right(val){
    return {
      right: val,
    }
  }

  static zIndex(val){
    return {
      zIndex: val
    }
  }
}
