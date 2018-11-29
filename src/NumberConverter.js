class NumberConverter {
  static formate(number, type="decimal") {
    return String(number);
  }

  static parse(numberString, type="decimal") {
    return Number.parseInt(numberString);
  }
}

module.exports = NumberConverter;
