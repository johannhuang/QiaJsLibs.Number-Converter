const NumberConverter = require('../index');

// Part 1
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

// Part 2
console.log('\n\n====== NumberConverter.parse() ======');

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
