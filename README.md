# Introduction

A number converter class.


## Usage

### `NumberConverter.formate(number, type='decimal', options={})`

- example

Snippet:

```js
console.log('\n0. ');
console.log(NumberConverter.formate(128.5));
console.log(NumberConverter.formate(128.5, 'decimal'));
console.log(NumberConverter.formate(128.5, 'binary'));
console.log(NumberConverter.formate(128.5, 'octal'));
console.log(NumberConverter.formate(128.5, 'hexadecimal'));
console.log(NumberConverter.formate(128.5, 'exponential'));

console.log('\n1. ');
console.log(NumberConverter.formate(0.321565));
console.log(NumberConverter.formate(0.321565, '%'));
console.log(NumberConverter.formate(0.321565, '%', { fixedDigits: 2 }));
console.log(NumberConverter.formate(0.321565, '%', { fixedDigits: 2, truncate: true }));

console.log('\n2. ');
console.log(NumberConverter.formate(0.321565));
console.log(NumberConverter.formate(0.321565, '‰'));
console.log(NumberConverter.formate(0.321565, '‰', { fixedDigits: 2 }));
console.log(NumberConverter.formate(0.321565, '‰', { fixedDigits: 2, truncate: true }));

console.log('\n3. ');
console.log(NumberConverter.formate(6945133156));
console.log(NumberConverter.formate(6945133156, '万'));
console.log(NumberConverter.formate(6945133156, '万', { fixedDigits: 2 }));
console.log(NumberConverter.formate(6945133156, '万', { fixedDigits: 2, truncate: true }));
```

Output:

```
0.
128.5
128.5
0b10000000.1
0o200.4
0x80.8
1.285e+2

1.
0.321565
32.1565%
32.16%
32.15%

2.
0.321565
321.565‰
321.56‰ // duing the JavaScript floating number precision issue
321.56‰

3.
6945133156
694513.3156万
694513.32万
694513.31万
```


### `NumberConverter.parse(numberString, type='decimal')`

```js

```

## Warning

Duing to the precision issue of JavaScript floating number, the rounding or truncating may not be precise when the number is at half edge, e.g., 0.05.


## References

- [MDN Docs - Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [MDN Docs - Arithmetic operators - Exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**))
- [MDN Docs - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
    - pity that no as powerful as Python
- [MDN Docs - Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [MDN Docs - Number.prototype.toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
- [MDN Docs - Number.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
- [MDN Cods - Number.prototype.toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
