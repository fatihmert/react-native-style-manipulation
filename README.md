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
        <Text style={[...Style.my(10), ...Style.shadow(5, 'red'), ...Style.brad(10), ...Style.bradx0]}>123</Text>
      </SafeAreaView>
    </>
  );
};
```

Available functions & variables;

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

//Border
Style.b(width, style, color)        // Border all corners with style (solid, dotted, dashed) rn supports
Style.br(width, color)              // Border right
Style.bl(width, color)              // Border left
Style.bt(width, color)              // Border top
Style.bb(width, color)              // Border bottom
Style.bx(width, color)              // Border left & right
Style.by(width, color)              // Border top & bottom

// Border unsets
Style.b0              // Border remove
Style.br0             // Border right remove
Style.bl0             // Border left remove
Style.bt0             // Border top remove
Style.bb0             // Border bottom remove
Style.bx0             // Border left & right remove
Style.by0             // Border top & bottom remove

// Border radius
Style.brad(val)             // Border radius all
Style.bradt(val)            // Border radius top
Style.bradb(val)            // Border radius bottom
Style.bradl(val)            // Border radius left
Style.bradr(val)            // Border radius right

// Border radius cross corners
Style.bradx(val)            // Border cross radius left top & bottom right
Style.bradxn(val)           // Border cross radius right top & bottom left

// Border radius unsets
Style.brad0                 // Border radius  remove
Style.bradt0                // Border radius top remove
Style.bradb0                // Border radius bottom remove
Style.bradl0                // Border radius left remove
Style.bradr0                // Border radius radius remove
Style.bradx0                // Border radius cross left top & bottom right remove
Style.bradxn0               // Border radius cross right top & bottom left remove

// Positions
Style.posre(val)            // position relative (react native default) 
Style.posab(val)            // position absolute  

// Position left/right/top/bottom
Style.post(val)             // position top     
Style.posb(val)             // position bottom 
Style.posl(val)             // position left 
Style.posr(val)             // position right 

// Position unsets (pushed side)
Style.post0                 // position top unset
Style.posb0                 // position bottom unset
Style.posl0                 // position left unset
Style.posr0                 // position right unset

Style.z(val)                // zIndex

// Font

// TextTransforms
Style.tt0                   // none 
Style.ttup                  // uppercase
Style.ttlow                 // lowercase
Style.ttcap                 // capitalize

// Font style
Style.fnorm                 // normal
Style.fital                 // italic

// Font weight
Style.fw(val)               // set custom or use below vars      
Style.fwn                   // normal
Style.fwb                   // bold
Style.fw100                 // fontWeight: 100
Style.fw200                 // fontWeight: 200
Style.fw300                 // fontWeight: 300
Style.fw400                 // fontWeight: 400
Style.fw500                 // fontWeight: 500
Style.fw600                 // fontWeight: 600
Style.fw700                 // fontWeight: 700
Style.fw800                 // fontWeight: 800
Style.fw900                 // fontWeight: 900

// Text align
Style.ta0                   // auto (unset, rn default)
Style.tac                   // center
Style.tal                   // left
Style.tar                   // right
Style.taj                   // justify (only ios)

// Text Decoration
Style.td0                   // none
Style.tdu                   // underline
Style.tdl                   // line-through

// Line height
Style.lh(val)               // line height
```

# CHANGELOG

## 1.0.3

 * Added positions & zIndex
 * Added font/text properties
 
## 1.0.2

 * Added border & border radius
 
## 1.0.1

 * Shadow bug fixeds
 
## 1.0.0

 * Init release

# TODO

* ~~Borders~~
* Responsive fontsize
* Color Manipulations
* Device detect
* ..and more
