# Throughline — 多语言作品集 / 接单站

一个自包含的静态站（无构建步骤），中 / 英 / 日 / 韩四语，用你的真实项目做"规格卡"案例。
定位：AI 自动化 + 定制系统的 B2B 接单站 —— 也就是可行性报告第 4 章里那块"决定中标率的作品集证据"。

## 本地预览

```bash
cd ai-studio-site
python3 -m http.server 8099      # 然后浏览器打开 http://localhost:8099
```
或直接双击 `index.html` 也能跑（纯静态、无构建）。
切语言：右上角按钮，或网址加 `?lang=en|zh|ja|ko`。

## 怎么改（都在很集中的地方）

| 想改什么 | 改哪个文件 | 位置 |
|---|---|---|
| **品牌名**（一键替换） | `js/app.js` | 顶部 `var BRAND={main:"Through",dim:"line",sep:""}` —— 只改这一处，全站标题/导航/页脚自动跟着变（`sep` 是两段之间的连接符，单词品牌留空、两词品牌填空格）|
| **案例项目**（增删改） | `js/projects.js` | 每个项目一个对象，含 `stack/year` + 四语 `{title,sector,role,summary,hl}`。复制一段即可加新案例 |
| **界面文案 / 能力 / 方法论** | `js/i18n.js` | 按语言分块（en/zh/ja/ko），改对应字段 |
| **联系方式** | `index.html` | 邮箱 `mailto:`（已填 bijianliu@gmail.com）；LinkedIn 把 `id="linkedinBtn"` 的 `href="#"` 换成你的主页 |
| **微信二维码** | `assets/wechat-qr.svg` | 用你的真实二维码图替换（保持文件名即可，或改成 .png 并同步 index.html 里的 `<img src>`) |
| **配色 / 字体** | `css/styles.css` | 顶部 `:root` 变量：`--signal`（柠檬绿强调色）、`--ink`（底色）、字体栈 |

> 改完静态文件直接刷新浏览器即可（无需重启/构建）。

## 设计

- 风格：**工程蓝图 / 仪表盘** —— 深墨底 + 骨白字 + 一抹电光柠檬绿信号色，等宽"规格标签"，发丝网格线。
- 字体：英文标题 Fraunces（编辑式衬线）+ IBM Plex Mono（技术标签）；中日韩标题走系统黑体（PingFang/Hiragino/Apple Gothic），保证四语都好看。
- 四语：`js/i18n.js`（界面）+ `js/projects.js`（案例），`js/app.js` 负责切换、渲染、动效。

## 怎么上线（任选其一，都免费）

1. **Vercel / Netlify**：把整个 `ai-studio-site` 文件夹拖进去，或连 GitHub 仓库，自动出一个 `xxx.vercel.app` 域名。零配置。
2. **GitHub Pages**：把文件夹推到一个仓库，Settings → Pages 选分支根目录即可。
3. **Cloudflare Pages**：同理，拖文件夹。
4. 自己的服务器：丢进任意静态目录用 nginx/任意静态服务托管即可。
5. 想要自定义域名（更显专业）：在上面任一平台绑你买的域名（如 `xxx.com`）。

## 待你补的占位项

- [x] 品牌名 **Throughline**（如需再改，`js/app.js` 一处）
- [ ] LinkedIn 链接（`index.html` 里 `linkedinBtn` 的 href）
- [ ] 微信二维码（`assets/wechat-qr.svg` 替换为真图）
- [ ] （可选）案例里的数字/措辞按你想强调的再调；雇主/客户名已默认脱敏

## SEO 备注

每种语言会动态更新 `<title>` 和 meta description，并支持 `?lang=` 直达。
若以后要做海外 SEO（按可行性报告的"分发"打法），可把四语各导出成独立 HTML 页（`/en/ /ja/ /ko/`）并加 `hreflang`，我可以帮你升级成那种预渲染结构。
