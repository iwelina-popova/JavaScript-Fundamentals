//Write a function that replaces non breaking white-spaces in a text with &nbsp;

console.log('--------------------');
console.log('Problem 5. nbsp');

var text = 'Write a function that replaces non breaking white-spaces in a text';

console.log(replaceWhitespaces(text, ' '));

function replaceWhitespaces(text, replace) {
    var result = text,
        i, len,
        index = 0;

    for(i = 0, len = text.length; i < len; i += 1) {
        index = text.indexOf(replace, i);
        if(index == -1) {
            return result;
        } else {
            result = result.replace(' ', '&nbsp;');
            i = index;
        }
    }

    return result;
}