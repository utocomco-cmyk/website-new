import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// 确保数据目录存在
const dataDir = path.join(process.cwd(), "data");
const quotesFile = path.join(dataDir, "quotes.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(quotesFile)) {
  fs.writeFileSync(quotesFile, JSON.stringify([], null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 读取现有数据
    const quotes = JSON.parse(fs.readFileSync(quotesFile, "utf-8"));
    
    // 添加新记录
    quotes.push({
      ...data,
      createdAt: new Date().toISOString(),
    });
    
    // 保存数据
    fs.writeFileSync(quotesFile, JSON.stringify(quotes, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: "报价请求已保存" 
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "保存失败" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quotes = JSON.parse(fs.readFileSync(quotesFile, "utf-8"));
    return NextResponse.json({ success: true, data: quotes });
  } catch {
    return NextResponse.json(
      { success: false, message: "读取失败" },
      { status: 500 }
    );
  }
}
