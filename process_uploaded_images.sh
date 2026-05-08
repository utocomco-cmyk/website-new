#!/bin/bash

# 手动处理已上传的压缩包

echo "=========================================="
echo "  处理产品详情图片"
echo "=========================================="
echo ""

EXTRACT_DIR="/Users/kasentex/.openclaw/workspace-web/sunsight-website/temp_images/extracted"
PRODUCTS_DIR="/Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products"

# 产品映射表
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

# 产品型号到ID的反向映射
declare -A MODEL_TO_ID=(
    ["UT-50MINI"]="1"
    ["UT-IX2-Pro"]="2"
    ["UT-460TC"]="3"
    ["UT-2K30"]="4"
    ["UT-9218"]="5"
    ["UT-A100"]="6"
    ["UT-600II"]="7"
    ["UT-8008_A"]="8"
    ["UT-AI300CNC"]="9"
    ["UT3200"]="10"
    ["UT-SmartGo"]="11"
    ["UT-S6000NMX"]="12"
    ["UT-MT4K80"]="13"
    ["UT-MT60_B"]="14"
    ["UT-360A"]="15"
    ["UT-600II_PII"]="16"
    ["UT-3D9000"]="17"
    ["UT-800_P3D"]="18"
    ["UT-3500AF"]="19"
    ["UT-MS8001"]="20"
    ["UT-800_3D"]="21"
    ["UT-Smart-2000M"]="22"
    ["UT-600"]="23"
)

# 查找解压后的根目录
ROOT_DIR=$(find "$EXTRACT_DIR" -maxdepth 1 -type d | grep -v "^$EXTRACT_DIR$" | head -1)

echo "📁 解压目录: $ROOT_DIR"
echo ""

# 处理每个产品文件夹
for product_folder in "$ROOT_DIR"/*; do
    if [ -d "$product_folder" ]; then
        folder_name=$(basename "$product_folder")
        echo "📂 处理文件夹: $folder_name"
        
        # 从产品文件夹名提取ID (如 "2-UT-IX2 Pro" -> "2")
        product_id=$(echo "$folder_name" | grep -oE '^[0-9]+' | head -1)
        
        if [ -n "$product_id" ] && [ -n "${PRODUCT_MAP[$product_id]}" ]; then
            product_dir="${PRODUCT_MAP[$product_id]}"
            target_dir="$PRODUCTS_DIR/$product_dir"
            
            echo "  → 产品ID: $product_id, 目录: $product_dir"
            
            # 创建目标目录
            mkdir -p "$target_dir"
            
            # 查找子文件夹中的图片
            img_folder=$(find "$product_folder" -type d | tail -1)
            
            if [ -d "$img_folder" ]; then
                # 获取所有图片并排序
                img_files=($(find "$img_folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort))
                
                echo "  → 找到 ${#img_files[@]} 张图片"
                
                # 复制并重命名图片
                idx=1
                for img_file in "${img_files[@]}"; do
                    if [ $idx -eq 1 ]; then
                        target_name="main.jpg"
                    else
                        target_name="detail$((idx-1)).jpg"
                    fi
                    
                    cp "$img_file" "$target_dir/$target_name"
                    echo "    ✓ $target_name ← $(basename "$img_file")"
                    
                    ((idx++))
                done
            fi
        else
            echo "  ⚠️ 无法识别产品ID: $folder_name"
        fi
        echo ""
    fi
done

echo "=========================================="
echo "  处理完成！"
echo "=========================================="
echo ""

# 统计结果
echo "📊 各产品图片数量统计:"
echo ""
for product_id in $(echo "${!PRODUCT_MAP[@]}" | tr ' ' '\n' | sort -n); do
    product_dir="${PRODUCT_MAP[$product_id]}"
    target_dir="$PRODUCTS_DIR/$product_dir"
    
    if [ -d "$target_dir" ]; then
        img_count=$(find "$target_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
        if [ $img_count -gt 0 ]; then
            echo "  产品 $product_id ($product_dir): $img_count 张图片"
        fi
    fi
done

echo ""
echo "✅ 所有图片已处理完毕！"
