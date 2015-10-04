/*Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.

 var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
 arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
 */

console.log('--------------------------');
console.log('Problem 2. Remove elements');

if (!Array.hasOwnProperty('removeElement')) {
    Array.prototype.removeElement = function(element) {
        var i, len;

        for (i = 0, len = this.length; i < len; i += 1) {
            if (this[i] === element) {
                this.splice(i, 1);
                i -= 1;
                len -= 1;
            }
        }
    }
}

var array = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(array)
array.removeElement(1); //arr = [2,4,3,4,111,3,2,'1'];
console.log(array);