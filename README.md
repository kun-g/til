Today I Learned
---

## 技术栈
- [Astro](https://astro.build/)
- [Strapi](https://strapi.io/)
- [Catalyst UI](https://catalyst.tailwindui.com/)

# 功能清单


# Roadmap
- 你可以通过 @astrojs/rss 插件自动生成 RSS Feed，后期便于 SEO 提升。
- 后续可拓展方向
    - 🔍 搜索 / 标签过滤
    - 📥 投稿系统（配合表单收集）
    - 🗓️ 时间线模式展示
    - 💬 评论区（集成 Disqus / giscus）
    - 🌐 多语言支持

🧩 关键功能设计
🟢 创建与编辑
全平台快速记录入口（如 Vim 插件、浏览器插件、API 接口）

默认 draft = true，confidence < X（如 6）不可自动公开

🟢 自信指数驱动机制
自信指数增长自动触发 draft → false

可视化能力圈图谱（后期）

🟢 标签 & 检索
无标签记录自动标注（作为提醒）

支持标签、关键词、自信度范围检索

支持「历史轨迹」过滤（只看已整合、已输出者）

🟢 输出关系追踪
每个 TIL 可挂接多个“后续内容”链接，体现“演化链”

最终输出（博客、视频等）可反向引用哪些 TIL

🟢 数据保持
历史版本不删除，保留“学习轨迹”

可选“已归档”状态而非“删除”







🔄 下一步建议
定义完整内容模型：我可以为你生成 Strapi 的 schema JSON 文件，供一键导入

搭建 Astro 前端原型：可基于你的 mergebrainrot.net 页面风格做基础适配

开发记录脚本 / 插件：

Vim 插件、浏览器插件或 CLI 工具（使用 Strapi API）

可视化分析：能力圈图谱、自信度演化趋势图