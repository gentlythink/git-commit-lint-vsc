/*
 * @Author: wangzhongjie
 * @Date: 2020-01-17 19:47:44
 * @LastEditors: gentlythink
 * @LastEditTime: 2022-11-08 15:06:44
 * @Description:提交规范
 * @Email: gentlythink@gmail.com
 */
export interface Emoji {
  readonly emoji: any;
  readonly code: any;
  readonly description: any;
  readonly name: any;
}
let emojis: Array<Emoji> = [
  {
    emoji: "feat: ",
    code: "feat: ",
    description: "引入新功能",
    name: "新功能"
  },
  {
    emoji: "fix: ",
    code: "fix: ",
    description: "修复bug",
    name: "bug"
  },
  {
    emoji: "style: ",
    code: "style: ",
    description: "更新UI样式文件",
    name: "样式"
  },
  {
    emoji: "format: ",
    code: "format: ",
    description: "格式化代码",
    name: "格式化"
  },
  {
    emoji: "docs: ",
    code: "docs: ",
    description: "添加/更新文档",
    name: "文档"
  },
  {
    emoji: "perf: ",
    code: "perf: ",
    description: "提高性能/优化",
    name: "优化"
  },
  {
    emoji: "init: ",
    code: "init: ",
    description: "初次提交/初始化项目",
    name: "初始化"
  },
  {
    emoji: "test: ",
    code: "test: ",
    description: "增加测试代码",
    name: "测试"
  },
  {
    emoji: "refactor: ",
    code: "refactor: ",
    description: "改进代码结构/代码格式",
    name: "优化"
  },
  {
    emoji: "patch: ",
    code: "patch: ",
    description: "添加重要补丁",
    name: "补丁"
  },
  {
    emoji: "file: ",
    code: "file: ",
    description: "添加新文件",
    name: "新文件"
  },
  {
    emoji: "publish: ",
    code: "publish: ",
    description: "发布新版本",
    name: "新版本"
  },
  {
    emoji: "tag: ",
    code: "tag: ",
    description: "发布版本/添加标签",
    name: "书签"
  },
  {
    emoji: "config: ",
    code: "config: ",
    description: "修改配置文件",
    name: "配置"
  },
  {
    emoji: "git: ",
    code: "git: ",
    description: "添加或修改.gitignore文件",
    name: "不可见"
  }
];
export default emojis;
