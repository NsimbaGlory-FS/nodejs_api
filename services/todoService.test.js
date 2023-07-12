const { todoService, todoServiceById } = require("./todoService");

jest.mock("./todoService");

describe("To do Service Tests", () => {
  test("As a user I should return 10 todos", async () => {
    const result = await todoService();
    expect(result.data).toHaveLength(10);
    expect(result.data[8].fact).toEqual(
      "A group of cats is called a “clowder."
    );
    expect(result.data[8].length).toEqual(38);
  });

  test("As a user I should return a to do object by Id", async () => {
    const result = await todoServiceById(3);
    console.log("result", result.data);

    expect(result.data.fact).toEqual(
      "The technical term for a cat’s hairball is a “bezoar."
    );
    expect(result.data.length).toEqual("54");
  });
});
