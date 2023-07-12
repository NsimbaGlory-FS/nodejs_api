const { todoService, todoServiceById } = require("./todoService");

describe("To do Service Tests", () => {
  test("As a user I should return 200 todos", async () => {
    const result = await todoService();
    expect(result.data).toHaveLength(200);
    expect(result.data[8].userId).toEqual(1);
    expect(result.data[8].id).toEqual(9);
    expect(result.data[8].title).toEqual("molestiate perpiciatis ipsa");
    expect(result.data[8].completed).toEqual(false);
  });

  test("As a user I should return a to do object by Id", async () => {
    const result = await todoServiceById(3);
    expect(result.data[0].userId).toEqual(1);
    expect(result.data[0].title).toEqual("fugiat veniam minus");
    expect(result.data[0].completed).toEqual(false);
  });
});
