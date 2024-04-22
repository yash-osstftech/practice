//! MockData
import { mockBlogPosts } from ".";
import type { BlogPost } from "../../service/structure/blog-structure";

export class BlogDataSource {
  async fetchBlogPosts(): Promise<BlogPost[]> {
    try {
      return mockBlogPosts;
    } catch (error: any) {
      throw new Error("Failed to fetch blog posts");
    }
  }
}
