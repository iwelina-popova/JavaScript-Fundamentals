//Write a function to count the number of div elements on the web page

console.log('-------------------------');
console.log('Problem 4. Number of elements');
console.log('Number of div elements: ' + countElements('div'));

function countElements(type) {

   var array = document.getElementsByTagName(type),
       counter;

    return counter = array.length;
}