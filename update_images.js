const fs = require('fs');

const dataFile = '/Users/kasentex/.openclaw/workspace-web/sunsight-website/src/app/products/data.ts';
const imageBase = '/images/products/工业相机-主图';

// 产品型号和图片路径映射
const productImages = {
  63: { model: 'Smart-6500', path: '4-Smart-6500显微镜相机/Smart-6500 (1).png' },
  64: { model: 'Smart-6500M', path: '5-Smart-6500M显微镜相机/Smart-6500M.png' },
  6: { model: 'UC-9185', path: '6-HDMI高清相机(SS-9185)/SS-9185 (1).png' },
  18: { model: 'SmartGO-185', path: '7-200万智能相机（SmartGO-185）/SmartGO-185CPLC (1).jpg' },
  59: { model: 'Smart-4k-80', path: '8-Smart-4k-80高清显微镜相机/Smart-4K80M.jpg' },
  17: { model: 'Smart-2K', path: '9-2K超清相机(Smart-2K)/Smart-2KM (1).png' },
  41: { model: 'UC-4K', path: '10-4k相机/Smart-4k (1).png' },
  60: { model: 'HDMI-2MP', path: '11-200万HDMI相机/HD-200 (1).jpg' },
  61: { model: 'HDMI-2MP-Pro', path: '12-200万像素HDMI相机/HD500.png' },
  25: { model: 'SmartGO-6MP-BW', path: '13-600万黑白视觉检测相机/SmartGO-178MPLC (1).png' },
  19: { model: 'SmartGO-178CPLC', path: '14-600万智能检测相机(SmartGO-178CPLC)/SmartGO-178CPLC (1).jpg' },
  12: { model: 'Smart-2000M', path: '15-HDMI高清测量相机(Smart-2000M)/Smart-2000M (1).png' },
  8: { model: 'Smart-2000', path: '16-HDMI高清相机(Smart-2000)/Smart-2000 (1).png' },
  9: { model: 'Smart-3000', path: '17-HDMI高清相机(Smart-3000)/Smart-3000 (1).png' },
  69: { model: 'HS-3500M', path: '18-HS-3500M显微镜相机/HS-3500M.png' },
  68: { model: 'HS3500', path: '19-HS3500显微镜相机/HS-3500 (1).jpg' },
  70: { model: 'Smart-100SE', path: '20-Smart-100SE显微镜相机/Smart-100SE (1).png' },
  62: { model: 'Smart-6000', path: '21-smart-6000显微镜相机/Smart-6000 (1).png' },
  71: { model: 'SmartGo-178PLC', path: '22-SmartGo-178PLC视觉检测相机/SmartGO-178MPLC (1).png' },
  65: { model: 'SMARTGO-6000M', path: '23-SMARTGO-6000M/Smart-6000M (1).jpg' },
  10: { model: '902', path: '24-VGA相机(902)/SS-902 (1).png' },
  23: { model: 'SmartGO-560M', path: '25-产品定位相机(SmartGO-560M)/SmartGO-560MPLC (1).png' },
  13: { model: 'Smart-3000M', path: '26-高清测量相机(Smart-3000M)/Smart-3000M (1).png' },
  22: { model: 'SmartGO-570M', path: '27-黑白视觉检测相机(SmartGO-570M)/SmartGO-570MPLC (1).png' },
  24: { model: 'Smart-3000A', path: '28-视觉检测相机（Smart-3000A）/SmartGO-3000A (1).jpg' },
  21: { model: 'SmartGO-130', path: '29-智能视觉加测相机130万/SmartGO-560CPLC (1).jpg' },
};

let content = fs.readFileSync(dataFile, 'utf8');

// 为每个产品添加图片
for (const [id, info] of Object.entries(productImages)) {
  const imagePath = `${imageBase}/${info.path}`;
  
  // 查找产品对象并添加 image 字段
  const productPattern = new RegExp(`(id: ${id},[\\s\\S]*?priceNum: 0,)([\\s\\S]*?rating:)`, 'g');
  
  content = content.replace(productPattern, (match, p1, p2) => {
    // 检查是否已经有 image 字段
    if (match.includes('image:')) {
      console.log(`产品 ID ${id} 已有图片，跳过`);
      return match;
    }
    console.log(`更新产品 ID: ${id}, 型号: ${info.model}`);
    return `${p1}\n    image: "${imagePath}",${p2}`;
  });
}

fs.writeFileSync(dataFile, content);
console.log('更新完成！');