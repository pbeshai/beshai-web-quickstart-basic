import bar from 'src/foo/bar';

console.log('hi');

document.querySelector(
  '#root'
).innerHTML = `loaded at ${new Date()}. bar = ${JSON.stringify(bar)}`;
