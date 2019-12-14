import { Platform, StatusBar, Dimensions } from "react-native";

export default class Font {
  constructor() { }

  // default rem/em size
  static rem = 16;

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

  static fontWeight(val) {
    return {
      fontWeight: val,
    }
  }

  static value(val){
    if(typeof val === 'string'){
      const rem = val.split('rem');

      if(rem.length > 1){
        return {
          fontSize: parseFloat(rem[0]) * this.rem
        };
      }
    }else{
      return {
        fontSize: parseFloat(val)
      };
    }
  }

  static Responsive(val, screenHeight=680){
    const { height, width } = Dimensions.get("window");
    const stdLen = width > height ? width : height;

    const deviceHeight = Platform.OS === 'android' ? stdLen - StatusBar.currentHeight : stdLen;

    if(typeof val === 'string'){
      let percent = val.split('%');
      if(percent.length > 1){
        percent = parseFloat(percent[0]);
        percent = parseInt(percent) > 100 ? 100 : percent;

        return {
          fontSize: Math.round(percent * deviceHeight / 100)
        };
      }
    }else{
      return {
        fontSize: Math.round(val * deviceHeight / screenHeight)
      };
    }
  }
}


