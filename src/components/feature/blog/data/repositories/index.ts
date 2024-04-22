import type { BlogPost } from "../../service/structure/blog-structure";
import type { BlogDataSource } from "../dataSource/blog.datasource";

//! Repository class that acts as an abstraction layer between the data source and the use-case
export class BlogRepository {
  constructor(private dataSource: BlogDataSource) {}

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return this.dataSource.fetchBlogPosts();
  }
}