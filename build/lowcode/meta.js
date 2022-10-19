!function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.SeadaRichEditorMeta=n():t.SeadaRichEditorMeta=n()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t),n.d(t,"components",(function(){return x})),n.d(t,"componentList",(function(){return P}));var r={componentName:"RichEditor",title:"RichEditor",docUrl:"",screenshot:"",devMode:"proCode",group:"\u9ed8\u8ba4\u5206\u7ec4",category:"\u8868\u5355",npm:{package:"@seada/rich-editor",version:"0.1.0",exportName:"default",main:"",destructuring:!1,subName:""},configure:{props:[{name:"ref",title:{label:"ref",tip:"ref | \u901a\u8fc7 this.$('xxx') \u83b7\u53d6\u5230\u7ec4\u4ef6\u5b9e\u4f8b"},defaultValue:function e(){return"rich_editor_".concat((new Date).valueOf())},setter:"StringSetter"},{name:"editorConfig",title:"\u7f16\u8f91\u5668\u914d\u7f6e",display:"block",type:"group",items:[{name:"defaultValue",title:{label:{type:"i18n","en-US":"defaultValue","zh-CN":"\u9ed8\u8ba4\u503c"},tip:"\u652f\u6301\u6587\u672c\u548chtml"},setter:["TextAreaSetter","VariableSetter"]},{name:"editorConfig.placeholder",title:"placeholder",setter:{componentName:"StringSetter",isRequired:!1,initialValue:"\u8bf7\u8f93\u5165\u5185\u5bb9..."}},{name:"editorConfig.readOnly",title:{label:{type:"i18n","en-US":"readOnly","zh-CN":"\u53ea\u8bfb"},tip:"readOnly | \u662f\u5426\u53ea\u8bfb"},setter:{componentName:"BoolSetter",isRequired:!1,initialValue:!1}},{name:"editorConfig.autoFocus",title:{label:{type:"i18n","en-US":"autoFocus","zh-CN":"autoFocus"}},setter:{componentName:"BoolSetter",isRequired:!1,initialValue:!0}}]}],supports:{style:!0,events:[{name:"onChange",description:"\u7f16\u8f91\u5668\u5185\u5bb9\u3001\u9009\u533a\u53d8\u5316\u65f6\u7684\u56de\u8c03\u51fd\u6570"},{name:"onDestroy",description:"\u7f16\u8f91\u5668\u9500\u6bc1\u65f6\u7684\u56de\u8c03\u51fd\u6570"},{name:"onFocus",description:"\u7f16\u8f91\u5668\u83b7\u53d6\u7126\u70b9\u65f6\u7684\u56de\u8c03\u51fd\u6570"},{name:"onBlur",description:"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u7684\u56de\u8c03\u51fd\u6570"}]},component:{}}},o=[{title:"RichEditor",screenshot:"",schema:{componentName:"RichEditor",props:{}}}],i=Object.assign(Object.assign({},r),{snippets:o});function a(e,t){return l(e)||u(e,t)||s(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],o=!0,i=!1,a,c;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){i=!0,c=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw c}}return r}}function l(e){if(Array.isArray(e))return e}function p(e){return d(e)||m(e)||s(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function m(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e){if(Array.isArray(e))return y(e)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var O={};function S(e){var t=[{title:"\u5e38\u7528",icon:"",children:[]},{title:"\u5bb9\u5668",icon:"",children:[]},{title:"\u5bfc\u822a",icon:"",children:[]},{title:"\u5185\u5bb9",icon:"",children:[]},{title:"Feedback \u53cd\u9988",icon:"",children:[]}],n={"\u539f\u5b50\u7ec4\u4ef6":!0},r={};return e.forEach((function(e){var o=e.category||"\u5176\u4ed6";e.group&&!r[e.componentName]&&(r[e.componentName]=e.group),e.group&&!n[e.group]&&(n[e.group]=!0);var i=t.find((function(e){return e.title===o}));i||(i={title:o,icon:"",children:[]},t.push(i)),e.snippets&&e.snippets.length&&i.children.push({componentName:e.componentName,title:e.title||e.componentName,sort:{category:i.title,group:r[e.componentName]||"\u539f\u5b50\u7ec4\u4ef6",priority:O[i.title]||0},icon:"",package:e.npm.pkg,snippets:e.snippets||[]})})),t}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"@seada/rich-editor",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0.1.1",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"@alifd/next":"1.25.23","@alifd/meet":"2.6.3",antd:"4.17.3"};if(!e||!n)return e;var o=e.npm;return o?("object"===v(r)&&r[o.package]?e.npm=h(h({},o),{},{version:r[o.package]}):o.package===t&&(e.npm=h(h({},o),{},{version:n})),e):e}["\u57fa\u7840\u5143\u7d20","\u5e03\u5c40\u5bb9\u5668\u7c7b","\u8868\u683c\u7c7b","\u8868\u5355\u8be6\u60c5\u7c7b","\u5e2e\u52a9\u7c7b","\u5bf9\u8bdd\u6846\u7c7b","\u4e1a\u52a1\u7c7b","\u901a\u7528","\u5f15\u5bfc","\u4fe1\u606f\u8f93\u5165","\u4fe1\u606f\u5c55\u793a","\u4fe1\u606f\u53cd\u9988"].reverse().forEach((function(e,t){O[e]=++t}));var N,x=[],w={};[i].forEach((function(e){if(Array.isArray(e))x.push.apply(x,p(e.map((function(e){if(!e.npm){var t=e.componentName,n=t.split("."),r=a(n,2),o=r[0],i=r[1];e.npm={exportName:o,main:"",destructuring:!0,subName:n.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=h(h({},w),e.npm||{}),j(e)}))));else if(e.components)x.push.apply(x,p(e.components.map((function(e){if(!e.npm){var t=e.componentName,n=t.split("."),r=a(n,2),o=r[0],i=r[1];e.npm={exportName:o,main:"",destructuring:!0,subName:n.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=h(h({},w),e.npm||{}),j(e)}))));else{if(!e.npm){var t=e.componentName,n=t.split("."),r=a(n,2),o=r[0],i=r[1];e.npm={exportName:o,main:"",destructuring:!0,subName:n.length>1?t.slice(t.indexOf(".")+1):i}}e.npm=h(h({},w),e.npm||{}),x.push(j(e))}}));var P=S(x),E=!0}])}));