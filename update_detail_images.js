const fs = require('fs');

const dataFile = '/Users/kasentex/.openclaw/workspace-web/sunsight-website/src/app/products/data.ts';
const imageBase = '/images/products/工业相机-主图';

// 产品型号和图片路径映射（包含所有可用的图片）
const productImages = {
  20: { 
    model: 'SmartGO-570CPLC', 
    folder: '1-智能视觉检测相机',
    files: ['SmartGO-570CPLC (1).jpg', 'SmartGO-570CPLC (2).jpg', 'SmartGO-570CPLC (3).jpg', 'SmartGO-570CPLC (4).jpg']
  },
  16: { 
    model: 'Smart-6000X', 
    folder: '2-多功能高清相机(Smart-6000X)',
    files: ['Smart-6000XM (1).png', 'Smart-6000XM (2).png']
  },
  46: { 
    model: 'FOV-3500AF', 
    folder: '3-大视野相机3500AF',
    files: ['3500AF (1).png', '3500AF (2).png', '3500AF (3).png', '3500AF (4).png', '3500AF (5).png', '3500AF (6).png', '3500AF (7).png', '3500AF (8).png']
  },
  63: { 
    model: 'Smart-6500', 
    folder: '4-Smart-6500显微镜相机',
    files: ['Smart-6500 (1).png', 'Smart-6500 (2).png']
  },
  64: { 
    model: 'Smart-6500M', 
    folder: '5-Smart-6500M显微镜相机',
    files: ['Smart-6500M.png', 'Smart-6500M.jpg']
  },
  6: { 
    model: 'UC-9185', 
    folder: '6-HDMI高清相机(SS-9185)',
    files: ['SS-9185 (1).png', 'SS-9185 (2).png']
  },
  18: { 
    model: 'SmartGO-185', 
    folder: '7-200万智能相机（SmartGO-185）',
    files: ['SmartGO-185CPLC (1).jpg', 'SmartGO-185CPLC (2).jpg']
  },
  59: { 
    model: 'Smart-4k-80', 
    folder: '8-Smart-4k-80高清显微镜相机',
    files: ['Smart-4K80M.jpg']
  },
  17: { 
    model: 'Smart-2K', 
    folder: '9-2K超清相机(Smart-2K)',
    files: ['Smart-2KM (1).png', 'Smart-2KM (2).png', 'Smart-2KM (3).png']
  },
  41: { 
    model: 'UC-4K', 
    folder: '10-4k相机',
    files: ['Smart-4k (1).png', 'Smart-4k (2).png', 'Smart-4k (3).png']
  },
  60: { 
    model: 'HDMI-2MP', 
    folder: '11-200万HDMI相机',
    files: ['HD-200 (1).jpg', 'HD-200 (2).jpg']
  },
  61: { 
    model: 'HDMI-2MP-Pro', 
    folder: '12-200万像素HDMI相机',
    files: ['HD500.png']
  },
  25: { 
    model: 'SmartGO-6MP-BW', 
    folder: '13-600万黑白视觉检测相机',
    files: ['SmartGO-178MPLC (1).png', 'SmartGO-178MPLC (2).png', 'SmartGO-178MPLC (3).jpg', 'SmartGO-178MPLC (4).jpg']
  },
  19: { 
    model: 'SmartGO-178CPLC', 
    folder: '14-600万智能检测相机(SmartGO-178CPLC)',
    files: ['SmartGO-178CPLC (1).jpg', 'SmartGO-178CPLC (2).jpg']
  },
  12: { 
    model: 'Smart-2000M', 
    folder: '15-HDMI高清测量相机(Smart-2000M)',
    files: ['Smart-2000M (1).png', 'Smart-2000M (2).png', 'Smart-2000M (3).png', 'Smart-2000M (4).png']
  },
  8: { 
    model: 'Smart-2000', 
    folder: '16-HDMI高清相机(Smart-2000)',
    files: ['Smart-2000 (1).png', 'Smart-2000 (2).png']
  },
  9: { 
    model: 'Smart-3000', 
    folder: '17-HDMI高清相机(Smart-3000)',
    files: ['Smart-3000 (1).jpg', 'Smart-3000 (1).png', 'Smart-3000 (2).png']
  },
  69: { 
    model: 'HS-3500M', 
    folder: '18-HS-3500M显微镜相机',
    files: ['HS-3500M.png']
  },
  68: { 
    model: 'HS3500', 
    folder: '19-HS3500显微镜相机',
    files: ['HS-3500 (1).jpg', 'HS-3500 (2).jpg', 'HS-3500 (3).jpg']
  },
  70: { 
    model: 'Smart-100SE', 
    folder: '20-Smart-100SE显微镜相机',
    files: ['Smart-100SE (1).png', 'Smart-100SE (2).png']
  },
  62: { 
    model: 'Smart-6000', 
    folder: '21-smart-6000显微镜相机',
    files: ['Smart-6000 (1).png', 'Smart-6000 (2).png']
  },
  71: { 
    model: 'SmartGo-178PLC', 
    folder: '22-SmartGo-178PLC视觉检测相机',
    files: ['SmartGO-178MPLC (1).png', 'SmartGO-178MPLC (2).png']
  },
  65: { 
    model: 'SMARTGO-6000M', 
    folder: '23-SMARTGO-6000M',
    files: ['Smart-6000M (1).jpg', 'Smart-6000M (2).jpg']
  },
  10: { 
    model: '902', 
    folder: '24-VGA相机(902)',
    files: ['SS-902 (1).png', 'SS-902 (2).png', 'SS-902 (3).png', 'SS-902 (4).png']
  },
  23: { 
    model: 'SmartGO-560M', 
    folder: '25-产品定位相机(SmartGO-560M)',
    files: ['SmartGO-560MPLC (1).png', 'SmartGO-560MPLC (2).png', 'SmartGO-560MPLC (3).jpg', 'SmartGO-560MPLC (4).jpg']
  },
  13: { 
    model: 'Smart-3000M', 
    folder: '26-高清测量相机(Smart-3000M)',
    files: ['Smart-3000M (1).png', 'Smart-3000M (2).png', 'Smart-3000M (3).png', 'Smart-3000M (4).png']
  },
  22: { 
    model: 'SmartGO-570M', 
    folder: '27-黑白视觉检测相机(SmartGO-570M)',
    files: ['SmartGO-570MPLC (1).png', 'SmartGO-570MPLC (2).png', 'SmartGO-570MPLC (3).jpg', 'SmartGO-570MPLC (4).jpg']
  },
  24: { 
    model: 'Smart-3000A', 
    folder: '28-视觉检测相机（Smart-3000A）',
    files: ['SmartGO-3000A (1).jpg', 'SmartGO-3000A (2).jpg', 'SmartGO-3000A (1).png']
  },
  21: { 
    model: 'SmartGO-130', 
    folder: '29-智能视觉加测相机130万',
    files: ['SmartGO-560CPLC (1).jpg', 'SmartGO-560CPLC (2).jpg', 'SmartGO-560CPLC (3).jpg', 'SmartGO-560CPLC (4).jpg']
  },
};

let content = fs.readFileSync(dataFile, 'utf8');

// 为每个产品添加 images 数组
for (const [id, info] of Object.entries(productImages)) {
  const imagePaths = info.files.map(f => `${imageBase}/${info.folder}/${f}`);
  const imagesArray = JSON.stringify(imagePaths);
  
  // 查找产品对象并添加 images 字段
  const productPattern = new RegExp(`(id: ${id},[\\s\\S]*?image: "[^"]+",)([\\s\\S]*?description:)`, 'g');
  
  content = content.replace(productPattern, (match, p1, p2) => {
    // 检查是否已经有 images 字段
    if (match.includes('images:')) {
      console.log(`产品 ID ${id} 已有 images 数组，跳过`);
      return match;
    }
    console.log(`更新产品 ID: ${id}, 型号: ${info.model}, 图片数: ${imagePaths.length}`);
    return `${p1}\n    images: ${imagesArray},\n    ${p2}`;
  });
}

fs.writeFileSync(dataFile, content);
console.log('详情页图片数组更新完成！');