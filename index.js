import Border from './lib/Border';

import Margin from './lib/Margin';
import Padding from './lib/Padding';

import Position from './lib/Position';
import Font from './lib/Font';

import Shadow from './lib/Shadow';
import TextShadow from './lib/TextShadow';

import Color from './lib/Color';

export default {
  // b: Border,
  b: (width=1, style='solid', color='#000') => Border.b(width, color, style),
  br: (width=1, color='#000') => Border.br(width, color),
  bl: (width=1, color='#000') => Border.bl(width, color),
  bt: (width=1, color='#000') => Border.bt(width, color),
  bb: (width=1, color='#000') => Border.bb(width, color),

  bx: (width=1, color='#000') => Border.bx(width, color),
  by: (width=1, color='#000') => Border.by(width, color),

  // unset borders
  b0: Border.unset('all'),
  br0: Border.unset('right'),
  bl0: Border.unset('left'),
  bt0: Border.unset('top'),
  bb0: Border.unset('bottom'),

  by0: Border.unset('y'),
  bx0: Border.unset('x'),

  // Border radius
  brad: val => Border.rad(val),
  bradt: val => Border.radt(val),
  bradb: val => Border.radb(val),
  bradl: val => Border.radl(val),
  bradr: val => Border.radr(val),

  bradx: val => Border.radcross(val), //cross top left & bottom right
  bradxn: val => Border.radcross_rev(val), // cross reverse top right & bottom left


  // Unset Border Radius
  brad0: Border.rad(0),
  bradt0: Border.radt(0),
  bradb0: Border.radb(0),
  bradl0: Border.radl(0),
  bradr0: Border.radr(0),
  bradx0: Border.radcross(0),
  bradxn0: Border.radcross_rev(0),


  // Margins
  mx: val => Margin.mx(val),
  my: val => Margin.my(val),
  m: val => Margin.m(val),
  mt: val => Margin.mt(val),
  ml: val => Margin.ml(val),
  mr: val => Margin.mr(val),
  mb: val => Margin.mb(val),

  // Paddings
  px: val => Padding.px(val),
  py: val => Padding.py(val),
  p: val => Padding.p(val),
  pt: val => Padding.pt(val),
  pl: val => Padding.pl(val),
  pr: val => Padding.pr(val),
  pb: val => Padding.pb(val),

  // Positions
  posre: Position.position('relative'),
  posab: Position.position('absolute'),

  post: val => Position.top(val),
  posb: val => Position.bottom(val),
  posl: val => Position.left(val),
  posr: val => Position.right(val),

  // Position pushs
  post0: Position.top(0),
  posb0: Position.bottom(0),
  posl0: Position.left(0),
  posr0: Position.right(0),

  // zIndex
  z: val => Position.zIndex(val),

  // Fonts
  tt0: Font.textTransform('none'),
  ttup: Font.textTransform('uppercase'),
  ttlow: Font.textTransform('lowercase'),
  ttcap: Font.textTransform('capitalize'),

  fnorm: Font.fontStyle('normal'),
  fital: Font.fontStyle('italic'),

  fw: val => Font.fontWeight(val),
  fwn: Font.fontWeight('normal'),
  fwb: Font.fontWeight('bold'),
  fw100: Font.fontWeight("100"),
  fw200: Font.fontWeight("200"),
  fw300: Font.fontWeight("300"),
  fw400: Font.fontWeight("400"),
  fw500: Font.fontWeight("500"),
  fw600: Font.fontWeight("600"),
  fw700: Font.fontWeight("700"),
  fw800: Font.fontWeight("800"),
  fw900: Font.fontWeight("900"),

  ta0: Font.textAlign('auto'),
  tac: Font.textAlign('center'),
  tal: Font.textAlign('left'),
  tar: Font.textAlign('right'),
  taj: Font.textAlign('justify'), //only ios

  td0: Font.textDecoration('none'), // text-decoation: none
  tdu: Font.textDecoration('underline'),
  tdl: Font.textDecoration('line-through'),

  lh: val => Font.lineHeight(val),

  // Font size (standart)
  fs: val => Font.value(val),  // Style.fs(5), Style.fs('1rem')

  // Responsive fontsize
  fsr: (val, screenHeight=680) => Font.Responsive(val, screenHeight),
  // Style.fsr('75%')
  // Style.fsr(25)
  // Style.fsr(25, 540)


  // Shadow
  shadow: (val, color='#000') => new Shadow(val, color).generate(),
  textShadow: (horizontal=-1, vertical=1, blurRadius=10, color='rgba(0,0,0,.25)') => TextShadow.generate(horizontal, vertical, blurRadius, color),

  // Color tinycolor.js
  color: (...args) => new Color(...args),
};
