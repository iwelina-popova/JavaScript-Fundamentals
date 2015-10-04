//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
/*Examples:

n	Divided by 7 and 5?
3	false
0	true
5	false
7	false
35	true
140	true
*/

var divided = 35,
    notDivided = 11;

console.log(checkIfDivided(divided));
console.log(checkIfDivided(notDivided));

function checkIfDivided(number) {
    if(number % 5 === 0 && number % 7 === 0 ){
        return true;
    } else {
        return false;
    }
};