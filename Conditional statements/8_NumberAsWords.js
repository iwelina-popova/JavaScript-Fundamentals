/*
 Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
 Examples:

 numbers	number as words
 0	        Zero
 9	        Nine
 10	        Ten
 12	        Twelve
 19	        Nineteen
 25	        Twenty five
 98	        Ninety eight
 98	        Ninety eight
 273	    Two hundred and seventy three
 400	    Four hundred
 501	    Five hundred and one
 617	    Six hundred and seventeen
 711	    Seven hundred and eleven
 999	    Nine hundred and ninety nine
 */

var number = 273,
    one,
    ten,
    hundred,
    result = '';

one = number % 10;
ten = Math.floor((number % 100) / 10);
hundred = Math.floor(number / 100);

if (hundred !== 0) {
 switch (hundred) {
  case 1: result += "One hundred "; break;
  case 2: result += "Two hundred "; break;
  case 3: result += "Three hundred "; break;
  case 4: result += "Four hundred "; break;
  case 5: result += "Five hundred "; break;
  case 6: result += "Six hundred "; break;
  case 7: result += "Seven hundred "; break;
  case 8: result += "Eigth hundred "; break;
  case 9: result += "Nine hundred "; break;
  default: console.log();
   break;
 }
 if (ten !== 0 && one !== 0) {
  result += "and ";
 }
}
if (ten === 1){
 switch (one) {
  case 0: result += "Ten"; break;
  case 1: result += "Eleven"; break;
  case 2: result += "Twelve"; break;
  case 3: result += "Thirteen"; break;
  case 4: result += "Fourteen"; break;
  case 5: result += "Fifteen"; break;
  case 6: result += "Sixteen"; break;
  case 7: result += "Seventeen"; break;
  case 8: result += "Eighteen"; break;
  case 9: result += "Nineteen"; break;
  default: console.log();
   break;
 }
}
if (ten > 1){
 switch (ten) {
  case 2: result += "Twenty "; break;
  case 3: result += "Thirty "; break;
  case 4: result += "Fourty "; break;
  case 5: result += "Fifty "; break;
  case 6: result += "Sixty "; break;
  case 7: result += "Seventy "; break;
  case 8: result += "Eighty "; break;
  case 9: result += "Ninety "; break;
  default: console.log();
   break;
 }
}
if (ten != 1){
 switch (one) {
  case 1: result += "One"; break;
  case 2: result += "Two"; break;
  case 3: result += "Three"; break;
  case 4: result += "Four"; break;
  case 5: result += "Five"; break;
  case 6: result += "Six"; break;
  case 7: result += "Seven"; break;
  case 8: result += "Eigth"; break;
  case 9: result += "Nine"; break;
  default: console.log();
   break;
 }
}
if (hundred == 0 && ten == 0 && one == 0){
 result += "Zero";
}

console.log(result);