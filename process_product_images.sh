#!/bin/bash

# ============================================
# 产品详情图片批量处理脚本
# ============================================
# 使用方法：
# 1. 将压缩包解压到本目录
# 2. 运行此脚本：bash process_product_images.sh
# 3. 脚本会自动将图片分类到对应产品目录
# ============================================

set -e

BASE_DIR="/Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products"
TEMP_DIR="/Users/kasentex/.openclaw/workspace-web/sunsight-website/temp_images/extracted"

echo "=========================================="
echo "  产品详情图片批量处理工具"
echo "=========================================="
echo ""

# 创建临时目录
mkdir -p "$TEMP_DIR"
cd "$TEMP_DIR"

# 查找压缩包
echo "🔍 查找压缩包..."
ZIP_FILE=$(find /Users/kasentex/.openclaw/workspace-web/sunsight-website/temp_images -name "*.zip" -type f 2>/dev/null | head -1)

if [ -z "$ZIP_FILE" ]; then
    echo "❌ 未找到压缩包"
    echo ""
    echo "请将压缩包放入以下目录之一："
    echo "  - /Users/kasentex/.openclaw/workspace-web/sunsight-website/temp_images/"
    echo "  - 或直接解压到当前目录"
    echo ""
    echo "按产品编号命名图片，例如："
    echo "  - 1_detail1.jpg, 1_detail2.jpg (产品ID 1 的详情图)"
    echo "  - 2_detail1.jpg, 2_detail2.jpg (产品ID 2 的详情图)"
    exit 1
fi

echo "✅ 找到压缩包: $ZIP_FILE"
echo ""

# 解压压缩包
echo "📦 解压压缩包..."
unzip -o "$ZIP_FILE" -d "$TEMP_DIR/extracted_files" 2>&1 | tail -10
echo "✅ 解压完成"
echo ""

# 产品ID映射表
declare -A PRODUCT_MAP=(
    ["1"]="ut-50mini"
    ["2"]="ut-ix2-pro"
    ["3"]="ut-460tc"
    ["4"]="ut-2k30"
    ["5"]="ut-9218"
    ["6"]="ut-a100"
    ["7"]="ut-600ii"
    ["8"]="ut-8008-a"
    ["9"]="ut-ai300cnc"
    ["10"]="ut3200"
    ["11"]="ut-smartgo"
    ["12"]="ut-s6000nmx"
    ["13"]="ut-mt4k80"
    ["14"]="ut-mt60-b"
    ["15"]="ut-360a"
    ["16"]="ut-600ii-pii"
    ["17"]="ut-3d9000"
    ["18"]="ut-800-p3d"
    ["19"]="ut-3500af"
    ["20"]="ut-ms8001"
    ["21"]="ut-800-3d"
    ["22"]="ut-smart-2000m"
    ["23"]="ut-600"
)

echo "🔄 开始处理图片..."
echo ""

# 处理每个产品的图片
for product_id in "${!PRODUCT_MAP[@]}"; do
    product_dir="${PRODUCT_MAP[$product_id]}"
    target_dir="$BASE_DIR/$product_dir"
    
    # 查找该产品的图片
    # 支持多种命名格式：1_*.jpg, 1-*.jpg, 1.*.jpg, product1_*.jpg 等
    found_files=$(find "$TEMP_DIR/extracted_files" -type f \( \
        -iname "${product_id}_*" -o \
        -iname "${product_id}-*" -o \
        -iname "${product_id}.*" -o \
        -iname "product${product_id}_*" -o \
        -iname "product_${product_id}_*" -o \
        -iname "*_${product_id}_*" \
    \) 2>/dev/null | sort)
    
    if [ -n "$found_files" ]; then
        echo "📁 产品 $product_id ($product_dir):"
        
        # 确保目标目录存在
        mkdir -p "$target_dir"
        
        # 复制并重命名图片
        counter=1
        echo "$found_files" | while read -r file; do
            if [ $counter -eq 1 ]; then
                # 第一张作为主图
                cp "$file" "$target_dir/main.jpg"
                echo "  ✓ main.jpg ($(basename "$file"))"
            else
                # 其余作为详情图
                cp "$file" "$target_dir/detail$((counter-1)).jpg"
                echo "  ✓ detail$((counter-1)).jpg ($(basename "$file"))"
            fi
            ((counter++))
        done
        echo ""
    fi
done

echo "=========================================="
echo "  处理完成！"
echo "=========================================="
echo ""
echo "📊 统计信息:"
echo ""

# 显示每个产品的图片数量
for product_id in $(echo "${!PRODUCT_MAP[@]}" | tr ' ' '\n' | sort -n); do
    product_dir="${PRODUCT_MAP[$product_id]}"
    target_dir="$BASE_DIR/$product_dir"
    
    if [ -d "$target_dir" ]; then
        img_count=$(find "$target_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
        echo "  产品 $product_id ($product_dir): $img_count 张图片"
    fi
done

echo ""
echo "✅ 所有图片已处理完毕！"
echo ""
echo "下一步操作:"
echo "  1. 检查图片是否正确"
echo "  2. 运行 npm run build 构建项目"
echo "  3. 部署更新后的网站"
echo ""

# 清理临时文件
read -p "是否清理临时文件? (y/n): " cleanup
if [ "$cleanup" = "y" ]; then
    rm -rf "$TEMP_DIR"
    echo "✅ 临时文件已清理"
fi
