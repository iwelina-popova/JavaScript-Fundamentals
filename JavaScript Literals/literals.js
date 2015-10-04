// IMPORTANT: All problems are in this .js

// Problem 1. JavaScript literals
//Assign all the possible JavaScript literals to different variables.

var integerLiteral = 5,
    floationgPointLitaral = 5.5555,
    booleanLiteral = true,
    arrayLiteral = [5, 'cat', 20],
    //Create a string variable with quoted text in it.
    //For example: `'How you doin'?', Joey said'.
    firstOption = '\'What\'s up?\', asked Joey',
    secondOption = "'What's up?', asked Joey'",
    objLiteral = { Literal: 'Object'},
    //Problem 4. Typeof null
    //Create null, undefined variables and try typeof on them.
    nullLiteral = null,
    undefinedLiteral = undefined;

var funcLiteral = function(){};

var literalsArray = [
    integerLiteral,
    floationgPointLitaral,
    booleanLiteral,
    arrayLiteral,
    firstOption,
    secondOption,
    objLiteral,
    nullLiteral,
    undefinedLiteral,
    funcLiteral
];

//Problem 3. Typeof variables
//Try typeof on all variables you created.
for(var item in literalsArray){
    console.log('Literal: ' + typeof literalsArray[item]);
}