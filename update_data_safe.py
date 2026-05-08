import os
import re

PRODUCTS_DIR = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products"
DATA_FILE = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/src/app/products/data.ts"

# 只更新有新图片的产品（2-17）
PRODUCTS_TO_UPDATE = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

PRODUCT_MAP = {
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
}

# 读取原文件
with open(DATA_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# 为每个产品更新 images 数组
for product_id in PRODUCTS_TO_UPDATE:
    product_dir = PRODUCT_MAP[product_id]
    target_dir = os.path.join(PRODUCTS_DIR, product_dir)
    
    if not os.path.exists(target_dir):
        continue
    
    # 获取所有图片
    img_files = [f for f in os.listdir(target_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    img_files.sort()
    
    if len(img_files) <= 1:
        continue
    
    # 构建新的 images 数组字符串
    images_lines = ["images: ["]
    for idx, img_file in enumerate(img_files):
        if idx == 0:
            img_path = f'/images/products/{product_dir}/main.jpg'
        else:
            img_path = f'/images/products/{product_dir}/detail{idx}.jpg'
        
        if idx < len(img_files) - 1:
            images_lines.append(f'      "{img_path}",')
        else:
            images_lines.append(f'      "{img_path}"')
    images_lines.append("    ],")
    
    new_images_str = "\n".join(images_lines)
    
    # 查找该产品的 images 数组并替换
    # 模式：id: X, ... images: [ ... ],
    pattern = rf'id:\s*{product_id},.*?images:\s*\[[^\]]*?\],'
    
    def replace_images(match):
        # 保留匹配内容的前面部分，只替换 images 数组
        text = match.group(0)
        # 找到 images: 的位置
        img_pos = text.find('images:')
        if img_pos > 0:
            return text[:img_pos] + new_images_str
        return match.group(0)
    
    # 使用 DOTALL 模式让 . 匹配换行符
    content_new = re.sub(pattern, replace_images, content, flags=re.DOTALL)
    
    if content_new != content:
        content = content_new
        print(f"✓ 产品 {product_id} ({product_dir}): 更新了 {len(img_files)} 张图片")

# 写回文件
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print()
print("✅ 产品数据文件已更新！")
