/* 
 
OR ( | | ) operator - If the first value is truthy, then the first value is returned.
                      Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned.
                      If the first value is falsy then the first value is returned or 
                      if the second value is falsy then the second value is returned.
*/
var x = 220;
var y = 'Hello';
var z = undefined;

x || y; // Returns 220 since the first value is truthy

x || z; // Returns 220 since the first value is truthy

x && y; // Returns "Hello" since both the values are truthy

y && z; // Returns undefined since the second value is falsy

if (x && y) {
  console.log('Code runs'); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
  console.log('Code runs'); // This block runs because x || y returns 220(Truthy)
}

/* 
  https://www.interviewbit.com/javascript-interview-questions/#javscript-data-types
https://www.interviewbit.com/node-js-interview-questions/
https://www.interviewbit.com/mongodb-interview-questions/
https://www.google.com/url?q=https://www.digitalvidya.com/blog/popular-full-stack-web-developer-interview-questions-and-answers/&sa=D&source=hangouts&ust=1627401262807000&usg=AFQjCNFW_qFYsG73i8SeT9XukIJGXdAWrg
*/
