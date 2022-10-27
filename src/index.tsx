import React, {
  CSSProperties,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nChangeLanguage } from '@wangeditor/editor';
import '@wangeditor/editor/dist/css/style.css';

interface IRichEditorProps {
  defaultValue?: string;
  editorConfig: IEditorConfig;
  style?: CSSProperties;
  __designMode?: string;
  language?: 'zh-CN' | 'en';
  onChange?: (editor: IDomEditor) => void;
}

const RichEditor = (props: IRichEditorProps, ref: any) => {
  const {
    editorConfig,
    defaultValue,
    style,
    __designMode,
    language,
    onChange: onTextChange,
  } = props;

  const isDesignMode = __designMode === 'design';

  const [editor, setEditor] = useState<IDomEditor | null>(null);
  // 编辑器内容
  const [html, setHtml] = useState(defaultValue);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};

  // 不支持动态刷新语言
  i18nChangeLanguage(language || 'zh-CN');

  // 及时销毁editor
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  useImperativeHandle(ref, () => ({
    editor,
  }));

  return (
    <div ref={ref} style={{ ...(style || {}) }}>
      <Toolbar
        defaultConfig={toolbarConfig}
        mode="default"
        editor={editor}
        style={{ pointerEvents: isDesignMode ? 'none' : 'auto', borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig} // 默认配置
        onCreated={setEditor}
        mode="default"
        onChange={(domEditor) => {
          setHtml(domEditor.getHtml());
          onTextChange?.(domEditor);
        }}
        value={html}
        style={{ pointerEvents: isDesignMode ? 'none' : 'auto' }}
      />
    </div>
  );
};

const RefRichEditor = forwardRef(RichEditor as ForwardRefRenderFunction<any, IRichEditorProps>);

RefRichEditor.displayName = 'RichEditor';

export default RefRichEditor;
