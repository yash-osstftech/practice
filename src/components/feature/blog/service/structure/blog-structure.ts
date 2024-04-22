//! interface for data
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

//! interface for repositories

export interface BlogDataSource {
  fetchBlogPosts(): Promise<BlogPost[]>;
}


