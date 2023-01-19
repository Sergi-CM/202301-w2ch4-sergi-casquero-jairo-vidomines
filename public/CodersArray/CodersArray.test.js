import { CodersArray } from "./CodersArray";

describe("Given a class CodersArray", () => {
  describe("When it receives 1, 2, 3 and 4", () => {
    test("Then it should return {0:1, 1:2, 2:3, 3:4, length:4}", () => {
      const firstUserInput = 1;
      const secondtUserInput = 2;
      const thirsttUserInput = 3;
      const fourthUserInput = 4;

      const expectedObejct = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };

      const object = new CodersArray(
        firstUserInput,
        secondtUserInput,
        thirsttUserInput,
        fourthUserInput
      );

      expect(object).toEqual(expectedObejct);
    });
  });
});
