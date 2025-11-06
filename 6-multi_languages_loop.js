#!/usr/bin/node

const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let result = '';

for (let i = 0; i < lines.length; i++) {
  result += lines[i];
  if (i < lines.length - 1) {
    result += '\n';
  }
}

console.log(result);
