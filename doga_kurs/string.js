const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(str.replace('dog','monkey'));

const words = str.split(' ');

console.log(str[1],words[2]);