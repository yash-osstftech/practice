
import { atom } from "nanostores";
import type { BlogPost } from "../../service/structure/blog-structure";

export const blogPostsStore = atom<BlogPost[]>([]);
export const isLoadingStore = atom(false);
export const errorStore = atom<string | null>(null);
