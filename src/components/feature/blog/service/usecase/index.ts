import { handleOperationResult, performOperation } from "../../../utils/operations";
import type { BlogRepository } from "../../data/repositories";
import {
  blogPostsStore,
  errorStore,
  isLoadingStore,
} from "../../view/state/blog-state";

export class BlogUseCase {
  constructor(private blogRepository: BlogRepository) {}

  async getLatestBlogPosts(): Promise<void> {
    try {
      isLoadingStore.set(true);
      errorStore.set(null);

       // Step 1: Call performOperation() to simulate the operation
       const operationShouldSucceed = true; // Adjust this based on your use case
       const operationResult = performOperation(operationShouldSucceed);
 
       // Step 2: Handle the result or error
       handleOperationResult(operationResult);
 
      const blogPosts = await this.blogRepository.getAllBlogPosts();

      blogPostsStore.set(
        blogPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      );
    } catch (err) {
      errorStore.set((err as Error).message);
    } finally {
      isLoadingStore.set(false);
    }
  }
}
