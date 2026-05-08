#!/bin/bash

# 产品详情图片处理脚本
# 用于接收和整理产品详情页图片

echo "=== 产品详情图片处理脚本 ==="
echo ""
echo "这个脚本会帮助你整理产品详情图片到正确的目录"
echo ""

# 创建目录结构
mkdir -p /Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products

cd /Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products

# 产品列表
products=(
  "ut-50mini:1"
  "ut-ix2-pro:2"
  "ut-460tc:3"
  "ut-2k30:4"
  "ut-9218:5"
  "ut-a100:6"
  "ut-600ii:7"
  "ut-8008-a:8"
  "ut-ai300cnc:9"
  "ut3200:10"
  "ut-smartgo:11"
  "ut-s6000nmx:12"
  "ut-mt4k80:13"
  "ut-mt60-b:14"
  "ut-360a:15"
  "ut-600ii-pii:16"
  "ut-3d9000:17"
  "ut-800-p3d:18"
  "ut-3500af:19"
  "ut-ms8001:20"
  "ut-800-3d:21"
  "ut-smart-2000m:22"
  "ut-600:23"
)

echo "已创建以下产品目录："
for product in "${products[@]}"; do
  IFS=':' read -r name id <<< "$product"
  mkdir -p "$name"
  echo "  - $name/ (产品ID: $id)"
done

echo ""
echo "=== 目录结构已准备就绪 ==="
echo ""
echo "请将解压后的图片按产品编号放入对应目录："
echo "  - main.jpg (主图)"
echo "  - detail1.jpg, detail2.jpg... (详情图)"
echo ""
ls -la
