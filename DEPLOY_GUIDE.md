# 🚀 网站部署指南

## 方式一：Vercel 部署（推荐）

### 1. 准备工作
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel（会打开浏览器授权）
vercel login
```

### 2. 部署步骤
```bash
# 进入项目目录
cd /Users/kasentex/.openclaw/workspace-web/sunsight-website

# 构建项目
npm run build

# 部署到 Vercel
vercel --prod
```

### 3. 配置自定义域名
1. 在 Vercel Dashboard 中添加域名
2. 在域名服务商处添加 DNS 记录：
   - CNAME 记录：www → cname.vercel-dns.com
   - A 记录：@ → 76.76.21.21

---

## 方式二：Netlify 部署

### 1. 准备工作
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login
```

### 2. 部署步骤
```bash
# 部署 dist 目录
netlify deploy --prod --dir=dist
```

---

## 方式三：自有服务器 + Cloudflare

### 1. 上传文件到服务器
```bash
# 使用 SCP 上传
cp -r dist/* user@your-server:/var/www/utocom/

# 或使用 rsync
rsync -avz dist/ user@your-server:/var/www/utocom/
```

### 2. Nginx 配置示例
```nginx
server {
    listen 80;
    server_name utocom.com www.utocom.com;
    
    root /var/www/utocom;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 启用 gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    
    # 缓存静态资源
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 3. 配置 Cloudflare CDN
1. 添加域名到 Cloudflare
2. 修改 DNS 服务器
3. 启用 CDN 和 HTTPS

---

## 📋 部署前检查清单

- [ ] 运行 `npm run build` 成功
- [ ] 检查 `dist` 目录存在
- [ ] 确认图片已优化（可选）
- [ ] 准备好域名

## 🔧 部署后验证

1. **访问网站** - 确认首页正常显示
2. **测试多语言** - 切换语言是否正常
3. **测试产品页** - 产品详情是否正常
4. **移动端测试** - 手机访问是否正常
5. **速度测试** - 使用 PageSpeed Insights

## 📞 需要帮助？

- Vercel 文档：https://vercel.com/docs
- Netlify 文档：https://docs.netlify.com
- Next.js 部署：https://nextjs.org/docs/deployment

---

**推荐：使用 Vercel，一键部署，自动 HTTPS，全球 CDN 加速！**
