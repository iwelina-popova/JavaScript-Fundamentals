//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

console.log('---------------------');
console.log('Problem 10. Find palindromes');

var text = "Palindrome is word, phrase, number which reads the same backward or forward - ABBA. More  examples: civic, radar, level, kayak and refer.",
    words = text.split(/[ \(,\)-:.]+/),
    word, isSame,
    middle;

console.log(words);

for(word in words) {
    isSame = false;
    middle = words[word].length / 2;

    for (var i = 0; i < middle; i++) {
        if (words[word][i] == words[word][words[word].length - 1 - i]) {
            isSame = true;
        } else {
            break;
        }
    }

    if(isSame)
        console.log(words[word]);
}