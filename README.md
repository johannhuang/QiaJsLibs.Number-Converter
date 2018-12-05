# Introduction

A number converter class.


## Usage

### `NumberConverter.formate(number, type='decimal', options={})`

- example

Snippet:

```js
console.log('\n\n====== NumberConverter.formate() ======');

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
console.log(NumberConverter.formate(0.321565, '%', true));
console.log(NumberConverter.formate(0.321565, '%', true, { fixedDigits: 2 }));
console.log(NumberConverter.formate(0.321565, '%', true, { fixedDigits: 2, truncate: true }));

console.log('\n2. ');
console.log(NumberConverter.formate(0.321565));
console.log(NumberConverter.formate(0.321565, '‰'));
console.log(NumberConverter.formate(0.321565, '‰', true));
console.log(NumberConverter.formate(0.321565, '‰', true, { fixedDigits: 2 }));
console.log(NumberConverter.formate(0.321565, '‰', true, { fixedDigits: 2, truncate: true }));

console.log('\n3. ');
console.log(NumberConverter.formate(6945133156));
console.log(NumberConverter.formate(6945133156, '万'));
console.log(NumberConverter.formate(6945133156, '万', true));
console.log(NumberConverter.formate(6945133156, '万', true, { fixedDigits: 2 }));
console.log(NumberConverter.formate(6945133156, '万', true, { fixedDigits: 2, truncate: true }));
```

Output:

```
0.
128.5
128.5
0b10000000
0o200
0x80
1.285e+2

1.
0.321565
32.1565
32.1565%
32.16%
32.15%

2.
0.321565
321.565
321.565‰
321.56‰
321.56‰

3.
6945133156
694513.3156
694513.3156万
694513.32万
694513.31万
```


### `NumberConverter.parse(numberString, type='decimal')`

```js
console.log('\n0. ');
console.log(NumberConverter.parse('128.5'));
console.log(NumberConverter.parse('128.5', 'decimal'));
console.log(NumberConverter.parse('0b10000000', 'binary'));
console.log(NumberConverter.parse('0o200', 'octal'));
console.log(NumberConverter.parse('0x80', 'hexadecimal'));
console.log(NumberConverter.parse('1.285e+2', 'exponential'));

console.log('\n1. ');
console.log(NumberConverter.parse('0.321565'));
console.log(NumberConverter.parse('32.1565', '%'));
console.log(NumberConverter.parse('32.1565%', '%', true));
console.log(NumberConverter.parse('32.16%', '%', true, { fixedDigits: 2 }));
console.log(NumberConverter.parse('32.15%', '%', true, { fixedDigits: 2, truncate: true }));

console.log('\n2. ');
console.log(NumberConverter.parse('0.321565'));
console.log(NumberConverter.parse('321.565', '‰'));
console.log(NumberConverter.parse('321.565‰', '‰', true));
console.log(NumberConverter.parse('321.56‰', '‰', true, { fixedDigits: 2 }));
console.log(NumberConverter.parse('321.56‰', '‰', true, { fixedDigits: 2, truncate: true }));

console.log('\n3. ');
console.log(NumberConverter.parse('6945133156'));
console.log(NumberConverter.parse('694513.3156', '万'));
console.log(NumberConverter.parse('694513.3156万', '万', true));
console.log(NumberConverter.parse('694513.32万', '万', true, { fixedDigits: 2 }));
console.log(NumberConverter.parse('694513.31万', '万', true, { fixedDigits: 2, truncate: true }));
```

Output:

```
0.
128.5
128.5
128
128
128
128.5

1.
0.321565
0.321565
0.321565
0.32159999999999994
0.3215

2.
0.321565
0.321565
0.321565
0.32156
0.32156

3.
6945133156
6945133156
6945133156
6945133199.999999
6945133100.000001
```


## Warning

Duing to the precision issue of JavaScript floating number, the rounding or truncating may not be precise when the number is at half edge, e.g., 0.05.


## References

- [MDN Docs - Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [MDN Docs - Arithmetic operators - Exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**))
- [MDN Docs - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
    - pity that not as powerful as Python
- [MDN Docs - Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [MDN Docs - Number.prototype.toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
- [MDN Docs - Number.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
- [MDN Dods - Number.prototype.toExponential()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)
