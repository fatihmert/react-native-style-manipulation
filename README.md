# react-native-style-manipulation

React Native Style helper utils library

Install

```npm i react-native-style-manipulation```

Usage;

How to use in `StyleSheet.create` 

```
import Style from 'react-native-style-manipulation';

...

StyleSheet.create({
  sample: {
    ...Style.mx(25),
    ...Style.shadow(25)
  },
});
```

How to use in `props` 

```
import Style from 'react-native-style-manipulation';

...

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={Style.px(5)}>123</Text>
        <Text style={[...Style.my(10), ...Style.shadow(5, 'red')]}>123</Text>
      </SafeAreaView>
    </>
  );
};
```

Available functions;

```
//Margins
Style.mx(val) 	// MarginLeft & MarginRight
Style.my(val) 	// MarginTop & MarginBottom
Style.m(val) 	// Margin
Style.mt(val) 	// MarginTop
Style.ml(val) 	// MarginLeft
Style.mr(val) 	// MarginRight
Style.mb(val) 	// MarginBottom

//Paddings
Style.px(val) 	// PaddingLeft & PaddingRight
Style.py(val) 	// PaddingTop & PaddingBottom
Style.p(val) 	// Padding
Style.pt(val) 	// PaddingTop
Style.pl(val) 	// PaddingLeft
Style.pr(val) 	// PaddingRight
Style.pb(val) 	// PaddingBottom

//Shadow
Style.shadow(size, color)	// Box shadow; Style.shadow(4, '#000')
Style.textShadow(hWidth, vWidth, blurRadius, color) // Text shadow; Style.shadow(horizantal=-1, vertical=1, blurRadius=10, color='rgba(0,0,0,.25)')
```

# TODO

* Borders
* Color Manipulations
* Device detect
* ..and more