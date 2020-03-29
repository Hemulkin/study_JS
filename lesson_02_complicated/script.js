/*jshint esversion: 7 */
let num = 266219, result = 1;
num += "";
for (i = 0; i < num.length; i++){
    result *= +num[i];
}
console.log('result: ', result);
console.log('result: ', result **= 3);
result += "";
console.log('result: ', result.substring(0,2));

