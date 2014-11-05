// Zwraca true w momencie gdy parametr jest liczbą parzystą.
function isEven(a) {
  if(a%2 === 0){
    return true;
  }
}

// Zwraca true jeśli parametr jest liczbą.
function isNumber(a) {
  if (typeof a === 'number')
    return true;
  else
    throw "Element tablicy nie jest liczbą";
}
var sum = 0;
// Zwraca sumę liczb parzystych w tablicy.
// Funkcja powinna sprawdzać czy:
// - parametr jest tablicą
// - elementy tablicy są liczbami
function sumArray(arr) {
    if (Array.isArray(arr)) {
      for(var i = o; i < arr.length; i++){
        if(isNumber(arr[i]) === true){
        console.log(sum = arr[i] + arr[i+1]);
        }
      }
    } else {
        throw "Parametr nie jest tablicą";
    }
}

// Liczy liczbę wystąpień danego znaku w podanym ciągu znaków. Dla 'aba' -> { 'a': 2, 'b': 1 }
function countChars(str) {

}