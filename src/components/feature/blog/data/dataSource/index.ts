import type { BlogPost } from "../../service/structure/blog-structure";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces...",
    author: "John Doe",
    createdAt: new Date("2023-04-01"),
  },
  {
    id: "2",
    title: "Exploring Astro: A new static site generator",
    content:
      "Astro is a new static site generator that combines the best features of several popular tools...",
    author: "Jane Smith",
    createdAt: new Date("2023-03-15"),
  },
  {
    id: "3",
    title: "Mastering TypeScript for modern web development",
    content:
      "TypeScript is a superset of JavaScript that adds optional static typing to the language...",
    author: "Michael Johnson",
    createdAt: new Date("2023-02-28"),
  },
];

// !  Data source class that returns mock blog post data
// export class BlogDataSource {
//   async fetchBlogPosts(): Promise<BlogPost[]> {
//     // console.log(mockBlogPosts);
//     return mockBlogPosts;
//   }
// }
