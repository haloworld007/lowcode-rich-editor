import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import '@wangeditor/editor/dist/css/style.css';

interface IRichEditorProps {}

const RichEditor = (props: IRichEditorProps, ref: any) => {
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  // 编辑器内容
  const [html, setHtml] = useState('<p>hello world</p>');

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};
  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  // 及时销毁editor
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <div ref={ref}>
      <Toolbar defaultConfig={toolbarConfig} mode="default" editor={editor} />
      <Editor
        defaultConfig={editorConfig}
        onCreated={setEditor}
        mode="default"
        onChange={(domEditor) => setHtml(domEditor.getHtml())}
        value={html}
      />
    </div>
  );
};

const RefRichEditor = forwardRef(RichEditor as ForwardRefRenderFunction<any, IRichEditorProps>);

RefRichEditor.displayName = 'RichEditor';

export default RefRichEditor;
