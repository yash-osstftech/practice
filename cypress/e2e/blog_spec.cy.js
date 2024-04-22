
describe("Blog Page UI", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4321/"); // Assuming '/blog' is the URL of your blog page
  });

  it("Should display blog posts when loaded successfully", () => {
    const mockData = [
      {
        id: "1",
        title: "Introduction to React",
        content:
          "React is a JavaScript library for building user interfaces...",
        author: "John Doe",
        createdAt: new Date("2023-04-01"),
      },
    ];
    cy.stub(window, "fetch").resolves({
      json: () => ({ blogPosts: mockData }),
    });
    // cy.get(".container").should("contain", "Loading...");
    cy.get(".container").should("contain", "Introduction to React");
    cy.get(".container").should(
      "contain",
      "React is a JavaScript library for building user interfaces..."
    );
    cy.get(".container").should("contain", "John Doe");
    // cy.get(".container").should("contain", "April 1, 2023");
  });
});
