class NumberConverter {
  static formate(number, type='decimal', typeInResult=false, options={}) {
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
        result = polish(number * 100);
        result += typeInResult ? '%' : '';
        break;
      case '‰':
        result = polish(number * 1000);
        result += typeInResult ? '‰' : '';
        break;
      case '万':
        result = polish(number / 10000);
        result += typeInResult ? '万' : '';
        break;
      case 'binary':
        result = `0b${number.toString(2).split('.')[0]}`;
        break;
      case 'octal':
        result = `0o${number.toString(8).split('.')[0]}`;
        break;
      case 'hexadecimal':
        result = `0x${number.toString(16).split('.')[0]}`;
        break;
      case 'exponential':
        result = number.toExponential();
        break;
      case 'decimal':
      default:
        result = polish(number);
        break;
    }

    return result; // String(result);
  }

  static parse(numberString, type='decimal', typeInInput=false, options={}) {
    let result = 0;

    const polish = (value) => {
      let theValue = Number(value);

      return theValue;
    };

    let theNumberString = '';
    let number = 0;
    switch (type.toLowerCase()) {
      case '%':
      case '％':
        theNumberString = typeInInput ? String(numberString).slice(0, -type.length) : numberString;
        number = Number(theNumberString);
        result = polish(number / 100);
        break;
      case '‰':
        theNumberString = typeInInput ? String(numberString).slice(0, -type.length) : numberString;
        number = Number(theNumberString);
        result = polish(number / 1000);
        break;
      case '万':
        theNumberString = typeInInput ? String(numberString).slice(0, -type.length) : numberString;
        number = Number(theNumberString);
        result = polish(number * 10000);
        break;
      case 'binary':
        result = Number(numberString);
        break;
      case 'octal':
        result = Number(numberString);
        break;
      case 'hexadecimal':
        result = Number(numberString);
        break;
      case 'exponential':
        result = Number(numberString);
        break;
      case 'decimal':
      default:
        number = Number(numberString);
        result = polish(number);
        break;
    }

    return result; // Number.parseFloat(result);
  }
}

module.exports = NumberConverter;
