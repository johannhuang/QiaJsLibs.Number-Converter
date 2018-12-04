class NumberConverter {
  static formate(number, type='decimal', options={}) {
    let result = '';
    
    const polish = (value) => {
      const { fixedDigits, truncate = false } = options;

      let theValue = '';
      if (typeof fixedDigits === 'number') {
        if (truncate) {
          theValue = (value - 0.5 / (10 ** fixedDigits)).toFixed(fixedDigits);          
        } else {
          theValue = value.toFixed(fixedDigits);
        }
      } else {
        theValue = value.toString();
      }

      return theValue;
    };

    switch (type.toLowerCase()) {
      case '%':
      case '％':
        result = `${polish(number * 100)}%`;
        break;
      case '‰':
        result = `${polish(number * 1000)}‰`;
        break;
      case '万':
        result = `${polish(number / 10000)}万`;
        break;
      case 'binary':
        result = `0b${number.toString(2)}`;
        break;
      case 'octal':
        result = `0o${number.toString(8)}`;
        break;
      case 'hexadecimal':
        result = `0x${number.toString(16)}`;
        break;
      case 'exponential':
        result = number.toExponential();
        break;
      case 'decimal':
      default:
        result = polish(number);
        break;
    }

    return result; // String(number);
  }

  static parse(numberString, type='decimal') {
    return Number.parseInt(numberString);
  }
}

module.exports = NumberConverter;
