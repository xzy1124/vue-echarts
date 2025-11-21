# Vue-ECharts 数据可视化平台

![Vue](https://img.shields.io/badge/Vue-3.3-brightgreen) ![Vite](https://img.shields.io/badge/Vite-5-blue) ![ECharts](https://img.shields.io/badge/ECharts-5-orange)

**项目名称**：Vue-ECharts 数据可视化平台
**项目类型**：前端数据可视化应用
**技术栈**：Vue 3 + Vite + ECharts + Vue Router + Axios + SCSS/LESS
**部署平台**：GitHub Pages
**在线展示**:https://xzy1124.github.io/vue-echarts/#/page

---

## 项目概述

* 提供可视化数据展示和交互分析功能
* 支持多种图表类型：柱状图、折线图、地图等
* 响应式设计，支持从移动设备到宽屏显示器的自适应布局
* 使用组件化架构，提高代码复用性和维护性

---

## 技术架构

| 层级      | 技术/工具                   | 功能            |
| ------- | ----------------------- | ------------- |
| 前端框架    | Vue 3 + Composition API | 组件化开发，响应式数据绑定 |
| 构建工具    | Vite                    | 极速开发体验和生产构建优化 |
| 路由管理    | Vue Router              | 单页应用导航管理      |
| 数据可视化   | ECharts                 | 图表展示与交互       |
| HTTP 请求 | Axios                   | 数据请求与环境切换     |
| 样式处理    | SCSS / LESS             | 模块化、可维护样式系统   |
| 部署平台    | GitHub Pages            | 静态站点部署        |

---

## 性能优化措施

### 1. 路由懒加载

```javascript
// src/router/index.js
component: () => import('../views/homePage.vue')
```

* 页面按需加载，减少首屏渲染时间
* 优化主包体积，提高首次内容绘制速度

### 2. 异步数据加载

```javascript
async function getChartData(){
  data = await $axios({url:"/mock/one.json"})
}

onMounted(()=> getChartData().then(setData))
```

* 数据加载与渲染解耦，避免白屏
* 非阻塞主线程，保证页面流畅

### 3. 响应式布局设计

```scss
@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    .itemLeft, .itemRight, .itemCenter { width: 100%; margin: .25rem 0; }
  }
}
```

* 跨设备显示效果一致
* 提升移动端和桌面端体验

### 4. 依赖共享机制

```javascript
provide('echarts', echarts);
provide('axios', axios);

const $echarts = inject('echarts');
const $axios = inject('axios');
```

* 减少重复实例化，优化内存使用
* 简化组件间依赖管理

### 5. 模块化组件设计

* 每个图表和页面独立组件（ItemOne、ItemTwo、MapPage、ItemPage）
* 支持按需加载和代码分割
* 提高复用性和可维护性

---

## 项目成果

* 成功构建并部署完整数据可视化应用到 GitHub Pages
* 多类型图表展示和交互功能完善
* 响应式布局确保多终端体验良好
* 模块化组件架构便于后续扩展

---



