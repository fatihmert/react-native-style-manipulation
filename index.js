import Border from './lib/Border';

import Margin from './lib/Margin';
import Padding from './lib/Padding';

import Shadow from './lib/Shadow';
import TextShadow from './lib/TextShadow';

export default {
  // b: Border,

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
  shadow: (val, color='#000') => Shadow(val, color).generate(),
  textShadow: (horizantal=-1, vertical=1, blurRadius=10, color='rgba(0,0,0,.25)') => TextShadow.generate(horizantal, vertical, blurRadius, color),
  


};
