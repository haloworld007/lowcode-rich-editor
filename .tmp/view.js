

export { default } from '/Users/ruhuotan/Project/rich-editor/src/index.tsx';

import * as componentInstances from '/Users/ruhuotan/Project/rich-editor/src/index.tsx';

import '/Users/ruhuotan/Project/rich-editor/src/index.scss'

export * from '/Users/ruhuotan/Project/rich-editor/src/index.tsx';

const coveredComponents = {};

const library = 'BizComp';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}