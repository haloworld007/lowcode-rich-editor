import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SeadaRichEditorMeta: ComponentMetadata = {
  componentName: 'RichEditor',
  title: 'RichEditor',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@seada/rich-editor',
    version: '0.1.0',
    exportName: 'default',
    main: 'src/index.tsx',
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
        setter: 'StringSetter',
      },
      {
        name: 'toolbarConfig',
        title: '工具栏配置',
        display: 'block',
        type: 'group',
        items: [],
      },
      {
        name: 'editorConfig',
        title: '编辑器配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'placeholder',
            title: 'placeholder',
            setter: 'StringSetter',
          },
          {
            name: 'readOnly',
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
            name: 'autoFocus',
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
          name: 'onCreated',
          description: '编辑器创建完毕时的回调函数',
        },
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
    title: 'RichEditor',
    screenshot: '',
    schema: {
      componentName: 'RichEditor',
      props: {},
    },
  },
];

export default {
  ...SeadaRichEditorMeta,
  snippets,
};
