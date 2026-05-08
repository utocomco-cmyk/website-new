#!/usr/bin/env python3
"""
改进的文件接收服务器 - 不限制命名格式
"""

import http.server
import socketserver
import os
import cgi
import zipfile
import shutil
from pathlib import Path
import re

PORT = 8765
UPLOAD_DIR = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/temp_images"
EXTRACT_DIR = os.path.join(UPLOAD_DIR, "extracted")
PRODUCTS_DIR = "/Users/kasentex/.openclaw/workspace-web/sunsight-website/public/images/products"

# 产品ID映射
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

class FileReceiverHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        """显示上传页面"""
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
        
        html = """
        <!DOCTYPE html>
        <html>
        <head>
            <title>产品图片上传</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background: #f5f5f5;
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                h1 { color: #333; margin-bottom: 10px; }
                .subtitle { color: #666; margin-bottom: 30px; }
                .upload-area {
                    border: 3px dashed #ccc;
                    border-radius: 8px;
                    padding: 60px 40px;
                    text-align: center;
                    transition: all 0.3s;
                    cursor: pointer;
                }
                .upload-area:hover {
                    border-color: #3b82f6;
                    background: #f0f7ff;
                }
                .upload-icon { font-size: 48px; margin-bottom: 20px; }
                .btn {
                    background: #3b82f6;
                    color: white;
                    padding: 12px 30px;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .btn:hover { background: #2563eb; }
                #fileInput { display: none; }
                .instructions {
                    background: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 30px;
                }
                .instructions h3 { margin-top: 0; color: #374151; }
                .instructions ul { color: #6b7280; line-height: 1.8; }
                .status {
                    margin-top: 20px;
                    padding: 15px;
                    border-radius: 6px;
                    display: none;
                }
                .status.success { background: #dcfce7; color: #166534; display: block; }
                .status.error { background: #fee2e2; color: #991b1b; display: block; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📦 产品详情图片上传</h1>
                <p class="subtitle">上传压缩包，自动按文件夹分类到对应产品</p>
                
                <form id="uploadForm" method="POST" enctype="multipart/form-data">
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon">📁</div>
                        <p><strong>点击选择文件</strong> 或拖拽文件到此处</p>
                        <p style="color: #999; font-size: 14px;">支持 .zip 格式</p>
                        <input type="file" id="fileInput" name="file" accept=".zip" required>
                        <br>
                        <button type="submit" class="btn">开始上传并处理</button>
                    </div>
                </form>
                
                <div class="status" id="status"></div>
                
                <div class="instructions">
                    <h3>📋 文件夹结构说明</h3>
                    <ul>
                        <li>压缩包内的文件夹名格式：<strong>数字-产品型号</strong></li>
                        <li>例如：<code>2-UT-IX2 Pro</code>、<code>3-UT-460TC</code></li>
                        <li>每个文件夹内的图片<strong>不限制命名格式</strong></li>
                        <li>系统会自动按文件夹分类，第一张作为主图</li>
                    </ul>
                </div>
            </div>
            
            <script>
                const uploadArea = document.getElementById('uploadArea');
                const fileInput = document.getElementById('fileInput');
                const form = document.getElementById('uploadForm');
                const status = document.getElementById('status');
                
                uploadArea.addEventListener('click', () => fileInput.click());
                uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.style.borderColor = '#3b82f6'; });
                uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = '#ccc'; });
                uploadArea.addEventListener('drop', (e) => { e.preventDefault(); fileInput.files = e.dataTransfer.files; });
                
                fileInput.addEventListener('change', () => {
                    if (fileInput.files.length > 0) {
                        uploadArea.querySelector('p strong').textContent = fileInput.files[0].name;
                    }
                });
                
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    status.className = 'status';
                    status.style.display = 'block';
                    status.textContent = '正在上传和处理，请稍候...';
                    
                    fetch('/', { method: 'POST', body: new FormData(form) })
                        .then(r => r.text())
                        .then(html => { status.className = 'status success'; status.innerHTML = html; })
                        .catch(e => { status.className = 'status error'; status.textContent = '上传失败: ' + e; });
                });
            </script>
        </body>
        </html>
        """
        self.wfile.write(html.encode())
    
    def do_POST(self):
        """处理文件上传"""
        try:
            form = cgi.FieldStorage(fp=self.rfile, headers=self.headers, environ={'REQUEST_METHOD': 'POST'})
            
            if 'file' not in form:
                self.send_error(400, "No file uploaded")
                return
            
            file_item = form['file']
            if not file_item.filename:
                self.send_error(400, "No file selected")
                return
            
            # 保存上传的文件
            os.makedirs(UPLOAD_DIR, exist_ok=True)
            zip_path = os.path.join(UPLOAD_DIR, "uploaded.zip")
            
            with open(zip_path, 'wb') as f:
                f.write(file_item.file.read())
            
            # 处理压缩包
            result = self.process_zip(zip_path)
            
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(result.encode())
            
        except Exception as e:
            self.send_error(500, str(e))
    
    def process_zip(self, zip_path):
        """处理压缩包 - 改进版"""
        try:
            # 清理并创建解压目录
            if os.path.exists(EXTRACT_DIR):
                shutil.rmtree(EXTRACT_DIR)
            os.makedirs(EXTRACT_DIR)
            
            # 解压文件
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(EXTRACT_DIR)
            
            # 查找解压后的根目录（处理中文文件夹名）
            root_dirs = [d for d in os.listdir(EXTRACT_DIR) if os.path.isdir(os.path.join(EXTRACT_DIR, d))]
            if not root_dirs:
                return "<h3>❌ 压缩包为空</h3>"
            
            extracted_root = os.path.join(EXTRACT_DIR, root_dirs[0])
            
            # 处理每个产品文件夹
            results = []
            processed_count = 0
            
            for folder_name in os.listdir(extracted_root):
                folder_path = os.path.join(extracted_root, folder_name)
                if not os.path.isdir(folder_path):
                    continue
                
                # 提取产品ID (如 "2-UT-IX2 Pro" -> "2")
                match = re.match(r'^(\d+)', folder_name)
                if not match:
                    continue
                
                product_id = match.group(1)
                if product_id not in PRODUCT_MAP:
                    continue
                
                product_dir = PRODUCT_MAP[product_id]
                target_dir = os.path.join(PRODUCTS_DIR, product_dir)
                
                # 查找所有图片（不限制命名）
                img_files = []
                for root, dirs, files in os.walk(folder_path):
                    for file in files:
                        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                            img_files.append(os.path.join(root, file))
                
                if img_files:
                    # 按文件名排序
                    img_files.sort()
                    
                    # 创建目标目录
                    os.makedirs(target_dir, exist_ok=True)
                    
                    # 复制并重命名图片
                    file_list = []
                    for idx, img_path in enumerate(img_files, 1):
                        if idx == 1:
                            target_name = "main.jpg"
                        else:
                            target_name = f"detail{idx-1}.jpg"
                        
                        target_path = os.path.join(target_dir, target_name)
                        shutil.copy2(img_path, target_path)
                        file_list.append(f"<li>{target_name} ← {os.path.basename(img_path)}</li>")
                    
                    results.append(f"<h4>✅ 产品 {product_id} ({product_dir}): {len(img_files)} 张图片</h4><ul>{''.join(file_list)}</ul>")
                    processed_count += 1
            
            if results:
                return f"""
                <h3>🎉 处理完成！共处理 {processed_count} 个产品</h3>
                {''.join(results)}
                <p style="margin-top: 20px;"><a href="/" style="color: #3b82f6;">← 返回上传更多</a></p>
                """
            else:
                return "<h3>⚠️ 未找到匹配的产品文件夹</h3><p>请确保文件夹名格式为：数字-产品型号（如：2-UT-IX2 Pro）</p>"
                
        except Exception as e:
            import traceback
            return f"<h3>❌ 处理失败</h3><p>{str(e)}</p><pre>{traceback.format_exc()}</pre>"

def run_server():
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    os.makedirs(PRODUCTS_DIR, exist_ok=True)
    
    with socketserver.TCPServer(("", PORT), FileReceiverHandler) as httpd:
        print(f"🚀 文件接收服务器已启动！")
        print(f"📍 访问地址: http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
