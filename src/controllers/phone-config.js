class PhoneConfig {
  constructor() {
    this.config = {
      1: [".", ",", "?", "!"],
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
      "*": ["'", "-", "+", "="],
      0: [" "],
      "#": ["case"],
    };
    this.configKeys = Object.keys(this.config);
  }

  getSymbolPath(symbol) {
    const loweredSymbol = symbol.toLowerCase();

    for (let i = 0; i < this.configKeys.length; i++) {
      const keyToPress = this.configKeys[i];

      // If the symbol is the same as the button then we return hold key
      if (keyToPress === loweredSymbol) {
        return loweredSymbol + "-";
      }

      const indexOfSymbol = this.config[keyToPress].indexOf(loweredSymbol);

      if (indexOfSymbol >= 0) {
        return keyToPress.repeat(indexOfSymbol + 1);
      }
    }

    return null;
  }
}

export { PhoneConfig };
