import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import os from 'os';

// 定义frontmatter数据的接口
interface TILFrontmatter {
  title?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  tags?: string[];
  [key: string]: any; // 允许其他可能的属性
}

// 定义TIL项的接口
interface TIL {
  id: string;
  slug: string;
  content: string;
  title: string;
  createdAt: string;
  confidence: number;
  tags: string[];
  path: string;
}

// 读取markdown文件的目录路径，并展开波浪线
const CONTENT_PATH = import.meta.env.TIL_DIR ? import.meta.env.TIL_DIR.replace(/^~/, os.homedir()) : '';

function loadTILs() {
  if (!CONTENT_PATH) {
    console.error('TIL_DIR not set in environment variables');
    return [];
  } else if (!fs.existsSync(CONTENT_PATH)) {
    console.error(`Directory does not exist: ${CONTENT_PATH}`);
    return [];
  }
  const files = fs.readdirSync(CONTENT_PATH);
  const tils = files
    .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .map(filename => {
      // 读取文件内容
      const filePath = path.join(CONTENT_PATH, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // 解析frontmatter和内容
      const { data, content } = matter(fileContent);
      const frontmatter = data as TILFrontmatter;
      
      // 获取slug（通常是文件名，去掉扩展名）
      const slug = frontmatter.slug || filename.replace(/\.mdx?$/, '');
      
      // 返回文章数据
      return {
        id: slug,
        title: frontmatter.title,
        slug: slug,
        confidence: frontmatter.confidence,
        content: content,
        createdAt: frontmatter.date,
        tags: frontmatter.tags,
        path: path.join(CONTENT_PATH, filename),
      } as TIL;
    })
    // 按创建日期降序排序
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || '');
      const dateB = new Date(b.createdAt || '');
      return dateB.getTime() - dateA.getTime();
    });
  
    return tils;
}

const TILS = loadTILs();

export function fetchAllTILs(): TIL[] {
  return TILS;
}

export async function fetchTILBySlug(slug: string): Promise<TIL | null> {
  const til = TILS.find(til => til.slug === slug);
  if (til) {
    return til;
  } else {
    return null;
  }
}