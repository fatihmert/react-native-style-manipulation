import Border from './lib/Border';

import Margin from './lib/Margin';
import Padding from './lib/Padding';

import Shadow from './lib/Shadow';
import TextShadow from './lib/TextShadow';

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

  // Shadow
  shadow: (val, color='#000') => new Shadow(val, color).generate(),
  textShadow: (horizontal=-1, vertical=1, blurRadius=10, color='rgba(0,0,0,.25)') => TextShadow.generate(horizontal, vertical, blurRadius, color),

};
