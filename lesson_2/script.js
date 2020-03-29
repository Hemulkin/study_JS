/*jshint esversion: 6 */
let money = 30000, income = 40000, 
addExpenses = 'Интернет, Такси, Коммуналка', 
deposit = true, mission = 1000000, period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(period));
console.log('длина строки addExpenses:', addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' рублей');

addExpenses.toLowerCase();
console.log( addExpenses.split(', '));

