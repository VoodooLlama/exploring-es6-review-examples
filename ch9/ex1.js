var v = 1;
let l = 'letVar';
const c = [ 3, 2, 1 ];

console.log('TEST1: ', v, l, c);
console.log('TEST1: ', window.v, window.l, window.c);

// (() => {
	// let l = 'newLetVar';
	// const c = [ 4, 5, 6 ];

	// console.log('TEST2: ', v, l, c);
	// console.log('TEST2: ', window.v, window.l, window.c);

	// var v2 = 'var2';
	// const c2 = [ 7, 8, 9 ];

	// console.log('TEST3: ', v2, c2);
	// console.log('TEST3: ', window.v2, window.c2);
// })();

// c = 2;
// c.push(4);
// console.log('TEST5: ', c);
