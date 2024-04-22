
import { mockBlogPosts } from "../../src/components/feature/blog/data/dataSource";
import { BlogDataSource } from "../../src/components/feature/blog/data/dataSource/blog.datasource";
import { BlogRepository } from "../../src/components/feature/blog/data/repositories";
import { BlogUseCase } from "../../src/components/feature/blog/service/usecase";

import {
  isLoadingStore,
  errorStore,
  blogPostsStore,
} from "../../src/components/feature/blog/view/state/blog-state";

describe("BlogUseCase", () => {
  let blogUseCase: BlogUseCase;
  let blogRepository: BlogRepository; // Assuming you have a mock implementation

  beforeEach(() => {
    // Arrange: Set up the necessary objects for testing
    blogRepository = new BlogRepository(new BlogDataSource()); // Initialize your mock repository
    blogUseCase = new BlogUseCase(blogRepository);
  });

  it("should fetch and set the latest blog posts", async () => {
    // Arrange: Set up any initial conditions
    blogRepository.getAllBlogPosts(); // Assuming you have a method to set mock data in your mock repository

    // Act: Invoke the method being tested
    await blogUseCase.getLatestBlogPosts();

    // Assert: Verify the outcome
    expect(isLoadingStore.get()).to.be.false; // Assuming isLoadingStore has a method to get the current value
    expect(errorStore.get()).to.be.null; // Assuming errorStore has a method to get the current value
    //comparing
    expect(blogPostsStore.get()).to.deep.equal(
      mockBlogPosts.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
    );
  });

});
