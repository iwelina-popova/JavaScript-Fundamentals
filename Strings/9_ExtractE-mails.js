/*
 Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.
 */

console.log('------------------------');
console.log('Problem 9. Extract e-mails');

var input = "I have two emails: pesho.peshov@mail.com and pesho_peshov@gmail.com",
    validEmail = input.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

console.log(validEmail);