//Write a script that finds the index of given element in a sorted array
// of integers by using the binary search algorithm.


var numbers = [1, 3, 4, 5, 7, 8, 9, 10, 18, 20],
    givenElement = 9,
    middle = 0,
    arrayBegin = 0,
    arrayEnd = numbers.length - 1,
    index = 0;


while (arrayEnd >= arrayBegin){

    middle = Math.floor((arrayBegin + arrayEnd) / 2);

    if (givenElement < numbers[middle]){
        arrayEnd = middle - 1;
    } else if (givenElement > numbers[middle]){
        arrayBegin = middle + 1;
    } else {
        index = middle;
        break;
    }
}
console.log('The index of searched element is: ', index);