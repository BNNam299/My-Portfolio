export interface ProjectConfig {
  id: string;
  name: string;
  category: string;
  folder: string;
  frameCount: number;
  ext?: string;
  overrides?: { [key: number]: string };
}

export const projects: ProjectConfig[] = [
  {
    id: "zoner",
    name: "Zoner|Measure Area App",
    category: "uiux",
    folder: "Zoner",
    frameCount: 21,
    ext: "webp"
  },
  {
    id: "meyu",
    name: "Meyu - Ứng dụng Quản lý Tài chính",
    category: "uiux",
    folder: "Meyu",
    frameCount: 30,
    ext: "webp"
  },
  {
    id: "mlegend",
    name: "MLegend - Đèn chiếu sáng",
    category: "other",
    folder: "MLegend",
    frameCount: 7,
    ext: "webp"
  }, 
  {
    id: "mrsgrand",
    name: "Mrs.Grand - Hoa hậu quý bà",
    category: "other",
    folder: "MrsGrand",
    frameCount: 6,
    ext: "webp"
  }
];
