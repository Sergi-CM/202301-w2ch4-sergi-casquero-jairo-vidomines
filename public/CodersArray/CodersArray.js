class CodersArray {
  length = 0;
  constructor(...userInputs) {
    let index = 0;
    for (const value of userInputs) {
      this[index] = value;
      index++;
    }

    this.length = index;
  }
}

export default CodersArray;
