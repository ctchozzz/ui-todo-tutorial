const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);

    // Clean up all todo tasks before running tests
    cy.get("body").then(($body) => {
      if ($body.find("[data-cy=todo-task__button-delete]").length) {
        cy.get("[data-cy=todo-task__button-delete]").each(($deleteButton) => {
          cy.wrap($deleteButton).click();
        });
      }
    });
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesWrite TODO appSend masks to grandma"
    );
  });

  it("should be able to delete todo", () => {
    cy.get("[data-cy=todo-task__button-delete").eq(1).click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesSend masks to grandma"
    );
  });
});
