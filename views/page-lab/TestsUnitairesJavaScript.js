// Whole-script strict mode syntax
"use strict";

var assert = require('assert');

describe('Multiplication', function(){
    it('should work', function(){
        assert.equal(2*3, 6);
    });
});

var firstName = 'Jake';
var lastName = 'Rawr';
console.log('My name is ${firstName} ${lastName}');
console.log(`My name is ${firstName} ${lastName}`);

describe('template-string', function(){
    it('should work', function(){
        assert.equal(`My name is ${firstName} ${lastName}`, 'My name is Jake Rawr');
    });
});

/*
 My name is ${firstName} ${lastName}
 My name is Jake Rawr

  Multiplication
    √ should work

  template-string
    √ should work

  2 passing (5ms)
*/

var srt;
['único','árbol', 'cosas', 'fútbol'].sort(function (a, b) {
  return a.localeCompare(b);
});
// ["árbol", "cosas", "fútbol", "único"]

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort(function (a, b) {
  return a.localeCompare(b);
});
// ["Wann", "wäre", "Woche", "wöchentlich"]

['único','árbol', 'cosas', 'fútbol'].sort(Intl.Collator().compare);
// ["árbol", "cosas", "fútbol", "único"]

srt = ['été', 'évidence', 'amère', 'garçon'].sort(Intl.Collator().compare);
// ["Wann", "wäre", "Woche", "wöchentlich"]

console.log(srt);


function sayHello () {
  console.log( "Hello, how are you?" );
}

function giveSomeNews () {
  console.log( "Roses are red. Did you know that?" );
}

function sayBye () {
  console.log( "Ok bye!" );
}

var greetings = {
  "patrick": sayHello,
  "john": giveSomeNews,
  "jane": giveSomeNews
};

var name = 'jane';
(typeof greetings[ name ] === "function")
  ? greetings[ name ]()
  : sayBye();