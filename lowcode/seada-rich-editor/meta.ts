import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SeadaRichEditorMeta: ComponentMetadata = {
  componentName: 'RichEditor',
  title: '富文本编辑器',
  docUrl: '',
  screenshot: require('./rich_editor.png'),
  devMode: 'proCode',
  group: '默认分组',
  category: '表单',
  npm: {
    package: '@seada/rich-editor',
    version: '0.1.0',
    exportName: 'default',
    main: '',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'ref',
        title: {
          label: 'ref',
          tip: "ref | 通过 this.$('xxx') 获取到组件实例",
        },
        defaultValue: () => {
          return `rich_editor_${new Date().valueOf()}`;
        },
        setter: 'StringSetter',
      },
      {
        name: 'editorConfig',
        title: '编辑器配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'defaultValue',
            title: {
              label: {
                type: 'i18n',
                'en-US': 'defaultValue',
                'zh-CN': '默认值',
              },
              tip: '支持文本和html',
            },
            setter: ['TextAreaSetter', 'VariableSetter'],
          },
          {
            name: 'editorConfig.placeholder',
            title: {
              label: {
                type: 'i18n',
                'en-US': 'placeholder',
                'zh-CN': '占位提示',
              },
            },
            setter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: '请输入内容...',
            },
          },
          {
            name: 'editorConfig.readOnly',
            title: {
              label: {
                type: 'i18n',
                'en-US': 'readOnly',
                'zh-CN': '只读',
              },
              tip: 'readOnly | 是否只读',
            },
            setter: {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false,
            },
          },
          {
            name: 'editorConfig.autoFocus',
            title: {
              label: {
                type: 'i18n',
                'en-US': 'autoFocus',
                'zh-CN': 'autoFocus',
              },
            },
            setter: {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: true,
            },
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '编辑器内容、选区变化时的回调函数',
        },
        {
          name: 'onDestroy',
          description: '编辑器销毁时的回调函数',
        },
        {
          name: 'onFocus',
          description: '编辑器获取焦点时的回调函数',
        },
        {
          name: 'onBlur',
          description: '编辑器失去焦点时的回调函数',
        },
      ],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '富文本编辑器',
    screenshot: require('./rich_editor.png'),
    schema: {
      componentName: 'RichEditor',
      props: {
        style: {
          borderWidth: '1px',
          borderColor: '#cccccc',
          borderStyle: 'solid',
        },
      },
    },
  },
];

export default {
  ...SeadaRichEditorMeta,
  snippets,
};
