#!/bin/bash

# 产品图片批量更新脚本
# 根据型号匹配图片文件夹并更新 data.ts

DATA_FILE="/Users/kasentex/.openclaw/workspace-web/sunsight-website/src/app/products/data.ts"
IMAGE_BASE="/images/products/工业相机-主图"

# 定义产品型号和图片路径的映射
# 格式: "产品ID|旧型号|新型号|图片路径"
declare -a products=(
    "63|Smart-6500|Smart-6500|4-Smart-6500显微镜相机/Smart-6500 (1).png"
    "64|Smart-6500M|Smart-6500M|5-Smart-6500M显微镜相机/Smart-6500M.png"
    "6|UC-9185|UC-9185|6-HDMI高清相机(SS-9185)/SS-9185 (1).png"
    "18|SmartGO-185|SmartGO-185|7-200万智能相机（SmartGO-185）/SmartGO-185CPLC (1).jpg"
    "59|Smart-4k-80|Smart-4k-80|8-Smart-4k-80高清显微镜相机/Smart-4K80M.jpg"
    "17|Smart-2K|Smart-2K|9-2K超清相机(Smart-2K)/Smart-2KM (1).png"
    "41|UC-4K|UC-4K|10-4k相机/Smart-4k (1).png"
    "60|HDMI-2MP|HDMI-2MP|11-200万HDMI相机/HD-200 (1).jpg"
    "61|HDMI-2MP-Pro|HDMI-2MP-Pro|12-200万像素HDMI相机/HD500.png"
    "25|SmartGO-6MP-BW|SmartGO-6MP-BW|13-600万黑白视觉检测相机/SmartGO-178MPLC (1).png"
    "19|SmartGO-178CPLC|SmartGO-178CPLC|14-600万智能检测相机(SmartGO-178CPLC)/SmartGO-178CPLC (1).jpg"
    "12|Smart-2000M|Smart-2000M|15-HDMI高清测量相机(Smart-2000M)/Smart-2000M (1).png"
    "8|Smart-2000|Smart-2000|16-HDMI高清相机(Smart-2000)/Smart-2000 (1).png"
    "9|Smart-3000|Smart-3000|17-HDMI高清相机(Smart-3000)/Smart-3000 (1).png"
    "69|HS-3500M|HS-3500M|18-HS-3500M显微镜相机/HS-3500M.png"
    "68|HS3500|HS3500|19-HS3500显微镜相机/HS-3500 (1).jpg"
    "70|Smart-100SE|Smart-100SE|20-Smart-100SE显微镜相机/Smart-100SE (1).png"
    "62|Smart-6000|Smart-6000|21-smart-6000显微镜相机/Smart-6000 (1).png"
    "71|SmartGo-178PLC|SmartGo-178PLC|22-SmartGo-178PLC视觉检测相机/SmartGO-178MPLC (1).png"
    "65|SMARTGO-6000M|SMARTGO-6000M|23-SMARTGO-6000M/Smart-6000M (1).jpg"
    "10|902|902|24-VGA相机(902)/SS-902 (1).png"
    "23|SmartGO-560M|SmartGO-560M|25-产品定位相机(SmartGO-560M)/SmartGO-560MPLC (1).png"
    "13|Smart-3000M|Smart-3000M|26-高清测量相机(Smart-3000M)/Smart-3000M (1).png"
    "22|SmartGO-570M|SmartGO-570M|27-黑白视觉检测相机(SmartGO-570M)/SmartGO-570MPLC (1).png"
    "24|Smart-3000A|Smart-3000A|28-视觉检测相机（Smart-3000A）/SmartGO-3000A (1).jpg"
    "21|SmartGO-130|SmartGO-130|29-智能视觉加测相机130万/SmartGO-560CPLC (1).jpg"
)

echo "开始更新产品图片..."

for product in "${products[@]}"; do
    IFS='|' read -r id old_model new_model image_path <<< "$product"
    
    # 检查产品是否存在于 data.ts 中
    if grep -q "id: $id," "$DATA_FILE"; then
        echo "更新产品 ID: $id, 型号: $new_model"
        
        # 使用 sed 添加 image 字段
        # 在 priceNum: 0, 和 rating: 之间插入 image 字段
        sed -i '' "/id: $id,/,/inStock: true,/{s/priceNum: 0,$/priceNum: 0,\n    image: \"$IMAGE_BASE\/$image_path\",/}" "$DATA_FILE"
    else
        echo "产品 ID $id 未找到"
    fi
done

echo "更新完成！"