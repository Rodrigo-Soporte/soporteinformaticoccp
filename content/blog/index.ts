import { post as desarrollo } from "./nextjs-tailwind-desarrollo-web";
import { post as debian } from "./debian-gnu-linux";
import { post as informacion } from "./valor-informacion";
import { post as seguridad } from "./seguridad-empresas";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  cover?: string;
  category: string;
}

const allPosts: BlogPost[] = [
  desarrollo,
  debian,
  informacion,
  seguridad,
];

export const posts = allPosts.sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);
