import os

PRODUCTS_DIR = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products"
DATA_FILE = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/src/app/products/data.ts"

PRODUCT_MAP = {
    "1": "ut-50mini",
    "2": "ut-ix2-pro",
    "3": "ut-460tc",
    "4": "ut-2k30",
    "5": "ut-9218",
    "6": "ut-a100",
    "7": "ut-600ii",
    "8": "ut-8008-a",
    "9": "ut-ai300cnc",
    "10": "ut3200",
    "11": "ut-smartgo",
    "12": "ut-s6000nmx",
    "13": "ut-mt4k80",
    "14": "ut-mt60-b",
    "15": "ut-360a",
    "16": "ut-600ii-pii",
    "17": "ut-3d9000",
    "18": "ut-800-p3d",
    "19": "ut-3500af",
    "20": "ut-ms8001",
    "21": "ut-800-3d",
    "22": "ut-smart-2000m",
    "23": "ut-600",
}

# 读取原文件
with open(DATA_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到每个产品的 images 数组并更新
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # 检查是否是 images: [ 行
    if 'images: [' in line and i + 1 < len(lines):
        # 向前查找产品ID
        product_id = None
        for j in range(i-1, max(0, i-50), -1):
            if 'id:' in lines[j]:
                import re
                match = re.search(r'id:\s*(\d+)', lines[j])
                if match:
                    product_id = match.group(1)
                    break
        
        if product_id and product_id in PRODUCT_MAP:
            product_dir = PRODUCT_MAP[product_id]
            target_dir = os.path.join(PRODUCTS_DIR, product_dir)
            
            if os.path.exists(target_dir):
                # 获取所有图片
                img_files = [f for f in os.listdir(target_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
                img_files.sort()
                
                # 构建新的 images 数组
                new_lines.append(line)  # images: [\n                
                for idx, img_file in enumerate(img_files):
                    if idx == 0:
                        img_path = f'/images/products/{product_dir}/main.jpg'
                    else:
                        img_path = f'/images/products/{product_dir}/detail{idx}.jpg'
                    
                    # 添加缩进
                    if idx < len(img_files) - 1:
                        new_lines.append(f'      "{img_path}",\n')
                    else:
                        new_lines.append(f'      "{img_path}"\n')
                
                # 跳过原有的 images 数组内容，直到找到 ]
                i += 1
                while i < len(lines) and ']' not in lines[i]:
                    i += 1
                # 添加 ] 行
                if i < len(lines):
                    new_lines.append(lines[i])
                i += 1
                continue
    
    new_lines.append(line)
    i += 1

# 写回文件
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("✅ 产品数据文件已更新！")
print()

# 显示更新结果
for product_id, product_dir in PRODUCT_MAP.items():
    target_dir = os.path.join(PRODUCTS_DIR, product_dir)
    if os.path.exists(target_dir):
        img_count = len([f for f in os.listdir(target_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
        print(f"产品 {product_id:2s} ({product_dir:20s}): {img_count} 张图片")
