# 海口玩石网络科技有限公司 · 官网

游戏公司官方介绍站（GitHub Pages 静态页），用途：公司介绍 + **TikTok 开发者企业信息审查**所需的可核验企业信息展示。

- 站点名称：海口玩石网络科技有限公司 / Haikou Wanshi Network Technology Co., Ltd.
- 风格：暗色霓虹游戏风（炫酷但信息严谨）
- 双语：中文 / English 导航切换（localStorage 记忆），审查方可一键切英文
- 零构建：纯 HTML + CSS + 原生 JS

## 页面结构
1. **Hero** — 公司全称 + 业务定位 + 状态卡
2. **公司简介 About** — 双语公司介绍
3. **企业信息 Company Profile（审查核心）** — 与审查模板字段一一对应：
   - Legal Name (English) / (Chinese)
   - Business Registration No.
   - Registered Address
   - Business Scope
   - Contact: Email / Website
4. **业务范围** — 游戏研发 / 软件开发 / 产品运营
5. **联系我们** — 邮箱 / 官网 / 注册地址
6. **页脚** — 公司全称版权信息

## 部署到 GitHub Pages
```bash
git init
git add .
git commit -m "feat: wanshi official site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```
仓库 → **Settings → Pages** → Source 选 `main` + `/(root)` → Save。约 1 分钟后访问
`https://<你的用户名>.github.io/<仓库名>/`。

## ⚠️ 上线前必改（与营业执照严格一致）
已按营业执照双语对照件补全以下信息（2026-10-22 核对）：

| 字段 | 值 | 来源 |
|---|---|---|
| Legal Name (EN) | Haikou Wanshi Network Technology Co., Ltd. | 执照英译件 |
| Legal Name (CN) | 海口玩石网络科技有限公司 | 执照 |
| Registration No. (USCC) | 91460000MAEAQ6Q99D | 执照中英两联核对一致 |
| Registered Address | 海南省海口市美兰区海府街道海府路12号亚希大厦14楼七室第104房 / Room 104, Seventh Section, 14th Floor, Yaxi Building, No. 12, Haifu Road, Haifu Sub-district, Meilan District, Haikou City, Hainan Province | 执照 |
| Business Scope | Game development, software development | 模板示例，执照二维码可查权威范围 |
| Email | ming@wanshiweb.cn | 用户指定，需确认可收信 |
| Website | 【本页面 URL · 部署后填写】 | 部署后填 GitHub Pages 地址 |

仍需处理的 2 类信息：
1. **Email**：`ming@wanshiweb.cn` —— **需确认该邮箱已注册且可收信**（审查方可能发邮件）。
2. **Website**：仍为占位 `【本页面 URL · 部署后填写】`（2 处），部署后填 GitHub Pages 地址。

## 其他可调整
- **换肤**：`assets/css/style.css` 顶部 `:root` 改 `--violet / --cyan / --grad`。
- **粒子特效**：`assets/js/main.js` 的 `COUNT = 70` 调密度；系统开启「减少动效」时自动停用。
