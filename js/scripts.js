var a = prompt('Wpisz wartosc a');
var	b = prompt('Wpisz wartosc b');
var	score = (a*a) + (2 * a * b) - (b*b);

console.log ('a: ' + a + ' b: ' + b + ' wynik: ' + score);
if (score>0) {
	console.log('Wynik dodatni');
} else if (score<0) {
	console.log('Wynik ujemny');
} else {
	console.log ('Zero');
}
