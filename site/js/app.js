import '../css/app.less';
import './alert.js'


import { helloMod1 } from './mod1'
import { XhelloMod2A, XhelloMod2B } from './mod2'

export function Hello ()
{
   console.log("Hello called")
}

window.app = {
   _helloMod1: helloMod1,
   _helloMod2: {
      HelloMod2a: XhelloMod2A,
      HelloMod2b: XhelloMod2B
   }
   
}
