//Write a script that finds the lexicographically smallest and largest property in
// document, window and navigator objects.

console.log('Smallest property in document: ' + findSmallestProp(document));
console.log('Largest property in document: ' + findLargestProp(document));
console.log('Smallest property in window: ' + findSmallestProp(window));
console.log('Largest property in window: ' + findLargestProp(window));
console.log('Smallest property in navigator: ' + findSmallestProp(navigator));
console.log('Largest property in navigator: ' + findLargestProp(navigator));

function findSmallestProp(obj){
    var smallest = 'zzz';
    for(var prop in obj){
        if(prop.toLowerCase() < smallest) {
            smallest = prop;
        }
    }
    return smallest;
}

function findLargestProp(obj){
    var largest = 'aaa';
    for(var prop in obj){
        if(prop > largest) {
            largest = prop;
        }
    }
    return largest;
}
