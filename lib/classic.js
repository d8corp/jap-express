"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _jap=_interopRequireDefault(require("jap")),_express=require("express");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function express(a,b=!0,c=!0,d){return(e,f)=>{(0,_express.json)()(e,f,g=>{if(!g){const g=[],h=(0,_jap.default)(new a(e,f),e.body,b,c,g,d||a),i=()=>f.end(JSON.stringify(h));g.length?Promise.all(g).then(i,i):i()}})}}var _default=express;exports.default=_default;