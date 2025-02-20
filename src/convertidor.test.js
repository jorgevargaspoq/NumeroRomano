import convertirARomano from "./convertidor.js";

describe("convertirARomano", () => {
  it("debería retornar 'I' para el número 1", () => {
    expect(convertirARomano(1)).toBe("I");
  });
});
