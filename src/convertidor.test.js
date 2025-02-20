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
    describe("convertirARomano", () => {
        it("debería retornar 'IX' para el número 9", () => {
          expect(convertirARomano(9)).toBe("IX");
        });
      
        it("debería retornar 'X' para el número 10", () => {
          expect(convertirARomano(10)).toBe("X");
        });
      
        it("debería retornar 'XL' para el número 40", () => {
          expect(convertirARomano(40)).toBe("XL");
        });
      
        it("debería retornar 'L' para el número 50", () => {
          expect(convertirARomano(50)).toBe("L");
        });
      
        it("debería retornar 'XC' para el número 90", () => {
          expect(convertirARomano(90)).toBe("XC");
        });
      
        it("debería retornar 'C' para el número 100", () => {
          expect(convertirARomano(100)).toBe("C");
        });
      
        it("debería retornar 'CD' para el número 400", () => {
          expect(convertirARomano(400)).toBe("CD");
        });
      
        it("debería retornar 'D' para el número 500", () => {
          expect(convertirARomano(500)).toBe("D");
        });
      
        it("debería retornar 'CM' para el número 900", () => {
          expect(convertirARomano(900)).toBe("CM");
        });
      
        it("debería retornar 'M' para el número 1000", () => {
          expect(convertirARomano(1000)).toBe("M");
        });
      });
      
  });
  