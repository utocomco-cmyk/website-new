#!/bin/bash

# 图片优化脚本
# 使用 ImageMagick 压缩图片

echo "=========================================="
echo "  图片优化工具"
echo "=========================================="
echo ""

# 检查 ImageMagick 是否安装
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick 未安装"
    echo "请安装 ImageMagick:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    exit 1
fi

echo "✅ ImageMagick 已安装"
echo ""

# 优化产品图片
echo "🖼️  优化产品图片..."
find /Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products -type f \( -name "*.jpg" -o -name "*.jpeg" \) -size +500k | while read file; do
    echo "  处理: $(basename "$file")"
    # 压缩到宽度1200px，质量85%
    convert "$file" -resize 1200x> -quality 85 "${file}.tmp"
    mv "${file}.tmp" "$file"
done

echo ""
echo "🖼️  优化Banner图片..."
find /Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/banner -type f \( -name "*.jpg" -o -name "*.jpeg" \) -size +500k | while read file; do
    echo "  处理: $(basename "$file")"
    # 压缩到宽度1920px，质量85%
    convert "$file" -resize 1920x> -quality 85 "${file}.tmp"
    mv "${file}.tmp" "$file"
done

echo ""
echo "🖼️  优化解决方案图片..."
find /Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/solutions -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -size +500k | while read file; do
    echo "  处理: $(basename "$file")"
    # 压缩到宽度1200px，质量85%
    convert "$file" -resize 1200x> -quality 85 "${file}.tmp"
    mv "${file}.tmp" "$file"
done

echo ""
echo "=========================================="
echo "  图片优化完成！"
echo "=========================================="
echo ""
echo "建议："
echo "1. 使用 WebP 格式替代 JPEG/PNG"
echo "2. 启用 CDN 图片压缩"
echo "3. 使用响应式图片"
echo "4. 实施懒加载"
