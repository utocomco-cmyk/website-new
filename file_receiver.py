#!/usr/bin/env python3
"""
简易文件接收服务器
用于接收压缩包并自动处理
"""

import http.server
import socketserver
import os
import cgi
import zipfile
import shutil
from pathlib import Path

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
                h1 {
                    color: #333;
                    margin-bottom: 10px;
                }
                .subtitle {
                    color: #666;
                    margin-bottom: 30px;
                }
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
                .upload-area.dragover {
                    border-color: #3b82f6;
                    background: #e0f2fe;
                }
                .upload-icon {
                    font-size: 48px;
                    margin-bottom: 20px;
                }
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
                .btn:hover {
                    background: #2563eb;
                }
                #fileInput {
                    display: none;
                }
                .status {
                    margin-top: 20px;
                    padding: 15px;
                    border-radius: 6px;
                    display: none;
                }
                .status.success {
                    background: #dcfce7;
                    color: #166534;
                    display: block;
                }
                .status.error {
                    background: #fee2e2;
                    color: #991b1b;
                    display: block;
                }
                .status.loading {
                    background: #e0f2fe;
                    color: #075985;
                    display: block;
                }
                .progress {
                    width: 100%;
                    height: 20px;
                    background: #e5e7eb;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-top: 20px;
                    display: none;
                }
                .progress-bar {
                    height: 100%;
                    background: #3b82f6;
                    width: 0%;
                    transition: width 0.3s;
                }
                .instructions {
                    background: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 30px;
                }
                .instructions h3 {
                    margin-top: 0;
                    color: #374151;
                }
                .instructions ul {
                    color: #6b7280;
                    line-height: 1.8;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📦 产品详情图片上传</h1>
                <p class="subtitle">上传压缩包，自动解压并分类到对应产品目录</p>
                
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
                
                <div class="progress" id="progress">
                    <div class="progress-bar" id="progressBar"></div>
                </div>
                
                <div class="status" id="status"></div>
                
                <div class="instructions">
                    <h3>📋 使用说明</h3>
                    <ul>
                        <li>压缩包内图片请按 <strong>产品编号_序号.jpg</strong> 命名</li>
                        <li>例如：<code>1_detail1.jpg</code>, <code>1_detail2.jpg</code>（产品ID 1）</li>
                        <li>系统会自动将图片分类到对应产品目录</li>
                        <li>第一张图片会作为主图（main.jpg）</li>
                        <li>其余图片作为详情图（detail1.jpg, detail2.jpg...）</li>
                    </ul>
                </div>
            </div>
            
            <script>
                const uploadArea = document.getElementById('uploadArea');
                const fileInput = document.getElementById('fileInput');
                const form = document.getElementById('uploadForm');
                const progress = document.getElementById('progress');
                const progressBar = document.getElementById('progressBar');
                const status = document.getElementById('status');
                
                uploadArea.addEventListener('click', () => fileInput.click());
                
                uploadArea.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    uploadArea.classList.add('dragover');
                });
                
                uploadArea.addEventListener('dragleave', () => {
                    uploadArea.classList.remove('dragover');
                });
                
                uploadArea.addEventListener('drop', (e) => {
                    e.preventDefault();
                    uploadArea.classList.remove('dragover');
                    fileInput.files = e.dataTransfer.files;
                });
                
                fileInput.addEventListener('change', () => {
                    if (fileInput.files.length > 0) {
                        uploadArea.querySelector('p strong').textContent = fileInput.files[0].name;
                    }
                });
                
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formData = new FormData(form);
                    
                    progress.style.display = 'block';
                    status.className = 'status loading';
                    status.textContent = '正在上传和处理...';
                    status.style.display = 'block';
                    
                    const xhr = new XMLHttpRequest();
                    
                    xhr.upload.addEventListener('progress', (e) => {
                        if (e.lengthComputable) {
                            const percent = (e.loaded / e.total) * 100;
                            progressBar.style.width = percent + '%';
                        }
                    });
                    
                    xhr.addEventListener('load', () => {
                        progress.style.display = 'none';
                        if (xhr.status === 200) {
                            status.className = 'status success';
                            status.innerHTML = xhr.responseText;
                        } else {
                            status.className = 'status error';
                            status.textContent = '处理失败: ' + xhr.responseText;
                        }
                    });
                    
                    xhr.addEventListener('error', () => {
                        progress.style.display = 'none';
                        status.className = 'status error';
                        status.textContent = '上传失败，请重试';
                    });
                    
                    xhr.open('POST', '/');
                    xhr.send(formData);
                });
            </script>
        </body>
        </html>
        """
        self.wfile.write(html.encode())
    
    def do_POST(self):
        """处理文件上传"""
        try:
            content_type = self.headers.get('Content-Type')
            if not content_type or 'multipart/form-data' not in content_type:
                self.send_error(400, "Invalid content type")
                return
            
            # 解析上传的文件
            form = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={'REQUEST_METHOD': 'POST'}
            )
            
            if 'file' not in form:
                self.send_error(400, "No file uploaded")
                return
            
            file_item = form['file']
            if not file_item.filename:
                self.send_error(400, "No file selected")
                return
            
            # 保存上传的文件
            os.makedirs(UPLOAD_DIR, exist_ok=True)
            zip_path = os.path.join(UPLOAD_DIR, "uploaded_product_images.zip")
            
            with open(zip_path, 'wb') as f:
                f.write(file_item.file.read())
            
            # 处理压缩包
            result = self.process_zip(zip_path)
            
            # 返回结果
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            self.wfile.write(result.encode())
            
        except Exception as e:
            self.send_error(500, str(e))
    
    def process_zip(self, zip_path):
        """处理压缩包"""
        try:
            # 记录日志
            print(f"[PROCESS] Starting to process: {zip_path}")
            print(f"[PROCESS] File size: {os.path.getsize(zip_path)} bytes")
            
            # 清理并创建解压目录
            if os.path.exists(EXTRACT_DIR):
                shutil.rmtree(EXTRACT_DIR)
            os.makedirs(EXTRACT_DIR)
            print(f"[PROCESS] Created extract dir: {EXTRACT_DIR}")
            
            # 解压文件
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                file_list = zip_ref.namelist()
                print(f"[PROCESS] Files in zip: {file_list}")
                zip_ref.extractall(EXTRACT_DIR)
            print(f"[PROCESS] Extraction completed")
            
            # 处理图片
            results = []
            
            for product_id, product_dir in PRODUCT_MAP.items():
                target_dir = os.path.join(PRODUCTS_DIR, product_dir)
                os.makedirs(target_dir, exist_ok=True)
                
                # 查找该产品的图片
                found_files = []
                print(f"[SEARCH] Looking for product {product_id} in {EXTRACT_DIR}")
                
                # 首先检查是否有对应的产品文件夹 (如 "2-UT-IX2 Pro", "3-UT-460TC")
                product_folder = None
                for item in os.listdir(EXTRACT_DIR):
                    if item.startswith(f"{product_id}-") or item.startswith(f"{product_id}_"):
                        product_folder = os.path.join(EXTRACT_DIR, item)
                        print(f"[SEARCH] Found product folder: {item}")
                        break
                
                # 如果在产品文件夹中找到图片
                if product_folder and os.path.isdir(product_folder):
                    for file in os.listdir(product_folder):
                        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                            found_files.append(os.path.join(product_folder, file))
                            print(f"[SEARCH] Found in folder: {file}")
                else:
                    # 否则在整个解压目录中搜索
                    for root, dirs, files in os.walk(EXTRACT_DIR):
                        print(f"[SEARCH] Scanning dir: {root}, files: {files}")
                        for file in files:
                            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                                print(f"[SEARCH] Checking file: {file}")
                                # 检查文件名是否匹配产品ID
                                if file.startswith(f"{product_id}_") or \
                                   file.startswith(f"{product_id}-") or \
                                   f"_{product_id}_" in file:
                                    found_files.append(os.path.join(root, file))
                                    print(f"[SEARCH] MATCHED: {file}")
                
                found_files.sort()
                
                if found_files:
                    results.append(f"<h4>产品 {product_id} ({product_dir}):</h4><ul>")
                    
                    for idx, file_path in enumerate(found_files, 1):
                        if idx == 1:
                            target_name = "main.jpg"
                        else:
                            target_name = f"detail{idx-1}.jpg"
                        
                        target_path = os.path.join(target_dir, target_name)
                        shutil.copy2(file_path, target_path)
                        results.append(f"<li>✅ {target_name} ← {os.path.basename(file_path)}</li>")
                    
                    results.append("</ul>")
            
            # 保留解压后的文件供检查（可选清理）
            # os.remove(zip_path)
            # shutil.rmtree(EXTRACT_DIR)
            
            if results:
                return f"""
                <h3>🎉 处理完成！</h3>
                <p>图片已成功分类到对应产品目录：</p>
                {''.join(results)}
                <p style="margin-top: 20px;">
                    <a href="/" style="color: #3b82f6;">← 返回上传更多</a>
                </p>
                """
            else:
                return "<h3>⚠️ 未找到匹配的图片</h3><p>请检查图片命名是否符合规则：产品编号_序号.jpg</p>"
                
        except Exception as e:
            return f"<h3>❌ 处理失败</h3><p>{str(e)}</p>"

def run_server():
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    os.makedirs(PRODUCTS_DIR, exist_ok=True)
    
    with socketserver.TCPServer(("", PORT), FileReceiverHandler) as httpd:
        print(f"🚀 文件接收服务器已启动！")
        print(f"📍 访问地址: http://localhost:{PORT}")
        print(f"📁 上传目录: {UPLOAD_DIR}")
        print(f"🎯 产品目录: {PRODUCTS_DIR}")
        print("")
        print("按 Ctrl+C 停止服务器")
        print("=" * 50)
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
