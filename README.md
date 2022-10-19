# @seada/rich-editor

基于 [wangEditor-for-React](https://github.com/wangeditor-team/wangEditor-for-react) 开发的富文本编辑器低代码组件。

## API

通过 ref 获取编辑器实例，然后调用[编辑器 API](https://www.wangeditor.com/v5/API.html) 完成操作。

```js
const editor = this.$('rich_editor_xxx').editor;

// 获取当前编辑器纯文本内容
const text = editor.getText();
// 获取非格式化的html
const html = editor.getHtml();
// 重置编辑器的html内容
editor.setHtml('<p>hello world</p>');
// 更多api请参考https://www.wangeditor.com/v5/API.html
...
```
