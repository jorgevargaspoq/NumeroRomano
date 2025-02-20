import convertirARomano from "./convertidor.js";

describe("convertirARomano", () => {
    it("debería retornar 'I' para el número 1", () => {
      expect(convertirARomano(1)).toBe("I");
    });
  
    it("debería retornar 'II' para el número 2", () => {
      expect(convertirARomano(2)).toBe("II");
    });
  
    it("debería retornar 'III' para el número 3", () => {
      expect(convertirARomano(3)).toBe("III");
    });
  
    it("debería retornar 'IV' para el número 4", () => {
      expect(convertirARomano(4)).toBe("IV");
    });
  
    it("debería retornar 'V' para el número 5", () => {
      expect(convertirARomano(5)).toBe("V");
    });
  });
  