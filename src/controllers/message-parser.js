class MessageParcer {
  constructor(phoneConfig = null) {
    this.phoneConfig = phoneConfig;
  }

  checkIsSymbolInUpperCase(symbol) {
    return symbol.toUpperCase() === symbol;
  }

  checkIsSymbolInLowerCase(symbol) {
    return symbol.toLowerCase() === symbol;
  }

  parseMessage(message) {
    const symbolsArray = message.split("");
    const result = [];
    let currentCase = "lower";

    symbolsArray.forEach((symbol) => {
      const path = this.phoneConfig.getSymbolPath(symbol);
      const isLetter = symbol.match(/[a-z]/gi);

      if (
        isLetter &&
        currentCase === "lower" &&
        this.checkIsSymbolInUpperCase(symbol)
      ) {
        currentCase = "upper";
        result.push("#");
      }

      if (
        isLetter &&
        currentCase === "upper" &&
        this.checkIsSymbolInLowerCase(symbol)
      ) {
        currentCase = "lower";
        result.push("#");
      }

      const lastElement = result.length > 0 ? result[result.length - 1] : null;

      // Add space to wait if we gotta press the same button
      if (
        lastElement &&
        lastElement[lastElement.length - 1] !== "#" &&
        lastElement[lastElement.length - 1] !== "-" &&
        lastElement[0] === path[0]
      ) {
        result.push(" ");
      }

      result.push(path);
    });

    return result.join("");
  }
}

export { MessageParcer };
