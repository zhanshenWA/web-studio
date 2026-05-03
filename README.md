# Agent Web Studio

一个面向网页开发场景的 **AI / Agent 协作演示产品**。  
这个仓库是为 GitHub 展示准备的，重点是把「网页开发 + 多模型协作 + 结果可视化」做成一个能直接发布的静态产品。

## 这个产品展示什么

- 用 `Codex` 做主 Agent，负责需求理解、任务拆分和代码骨架生成
- 用 `OpenClaw` 做任务编排，把页面拆成多个可并行的子任务
- 用 `GPT-5.4`、`GPT-5.5`、`GPT-5.3-codex` 分别处理生成、修复、复核
- 面向网页开发场景，强调页面搭建、样式调整、联调排错和最终验收
- 适合作为 GitHub 仓库首页、作品集页面、申报材料展示页

## 页面内容

- Hero 首屏，直接说明产品定位
- 核心指标卡片，突出 `70%` 效率提升、`50%+` 时间节省和日均 `1.5 - 2.0 亿 token`
- 四段式工作流说明
- 可切换的场景指挥台，展示不同项目下的任务分配
- GitHub 上传指南和仓库结构示意

## 仓库结构

```text
agent-web-studio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .nojekyll
```

## 本地预览

这个项目是纯静态网页，直接打开 `index.html` 就能看。

如果你想用本地服务器预览，可以在项目目录运行：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 上传到 GitHub

建议的仓库名：

```text
agent-web-studio
```

如果你是第一次上传，可以这样做：

```powershell
git init
git add .
git commit -m "feat: initial agent web studio"
git branch -M main
git remote add origin https://github.com/你的用户名/agent-web-studio.git
git push -u origin main
```

## GitHub Pages

这个仓库按静态站点方式发布，推到 GitHub 后可以直接启用 Pages。

如果你想手动检查 Pages 设置，也可以在 GitHub 仓库设置里选择：

- `Settings`
- `Pages`
- `Build and deployment`
- `Source: Deploy from a branch`
- `Branch: main`
- `Folder: / (root)`

如果你希望走最稳的静态站点方式，这个仓库也支持直接从 `main / root` 发布，不需要额外的 Pages 工作流文件。

## 线上地址

部署完成后，站点会在这个地址访问：

```text
https://zhanshenwa.github.io/web-studio/
```

## 你可以继续扩展的方向

- 加一个真实的任务输入框，自动生成网页需求拆解
- 接上你自己的后端 API，让页面变成可交互的工作台
- 增加截图对比、bug 列表和发布记录
- 加入英文版本，做成中英双语项目

## 一句话介绍

> 一个把网页开发流程产品化的多 Agent 协作演示站，适合直接放到 GitHub 作为作品集和申请材料展示。
