
/*jshint esversion: 6 */


let money = 30000, income = 40000, 
addExpenses = 'Интернет, Такси, Коммуналка', 
deposit = true, mission = 1000000, period = 12, expenses1, 
expenses2, amount1, amount2, budgetMonth,  budgetDay;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(period));
console.log('длина строки addExpenses:', addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' рублей');

addExpenses.toLowerCase();
console.log( addExpenses.split(', '));

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
deposit = confirm('Есть ли у вас депозит в банке?');

expenses1 = prompt('введите обязатялеьную статью расходов?');
amount1 = prompt('Во сколько это обойдется?');

expenses2 = prompt('введите обязатялеьную статью расходов?');
amount2 = prompt('Во сколько это обойдется?');

//Вычислить бюджет на месяц
budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ', budgetMonth);

console.log('цель будет достигнута за: ',Math.ceil(mission/budgetMonth), ' месяцев');

budgetDay = Math.floor(budgetMonth/30);
console.log('бюджет на день: ', budgetDay);

if( budgetDay > 1200 ){
    console.log('У вас высокий уровень дохода');
} else if( budgetDay > 600 && budgetDay <= 1200 ){
    console.log('У вас средний уровень дохода');
} else if( budgetDay <= 600 ){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if ( budgetDay < 0 ){
    console.log('что то пошло не так');
} else if ( budgetDay === 0 ){
    console.log('Работаешь за еду');
}