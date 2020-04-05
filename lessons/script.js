
/*jshint esversion: 6 */

const getExpensesMonth = function( setMoney, exp1, exp2, callback ){
    let exp = Number(exp1) + Number(exp2);
    return callback(setMoney, exp);
};

const getAccumulatedMonth = function(setMoney, exp){
    return Number(setMoney) - Number(exp);
};

const getTargetMonth = function(setMoney, setMission){
    Number(setMoney);
    Number(setMission);
    return Math.ceil(setMission/setMoney);
};

const getStatusIncome = function(setBudget){
    Number(setBudget);
    if( setBudget > 1200 ){
        console.log('У вас высокий уровень дохода');
    } else if( setBudget > 600 && setBudget <= 1200 ){
        console.log('У вас средний уровень дохода');
    } else if( setBudget <= 600 ){
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if ( setBudget < 0 ){
        console.log('что то пошло не так');
    } else if ( setBudget === 0 ){
        console.log('Работаешь за еду');
    }
};
let money = 30000, income = 40000, 
addExpenses = 'Интернет, Такси, Коммуналка', 
deposit = true, mission = 1000000, period = 12, expenses1, 
expenses2, amount1, amount2, budgetDay,
accumulatedMonth;
/*
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(period));
console.log('длина строки addExpenses:', addExpenses.length);
console.log('Период равен ', period, ' месяцев');
console.log('Цель заработать ', mission, ' рублей');

addExpenses.toLowerCase();
console.log( addExpenses.split(', '));
*/
money = prompt('Ваш месячный доход?');
//addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
//deposit = confirm('Есть ли у вас депозит в банке?');

expenses1 = prompt('введите обязатялеьную статью расходов?');
amount1 = prompt('Во сколько это обойдется?');

expenses2 = prompt('введите обязатялеьную статью расходов?');
amount2 = prompt('Во сколько это обойдется?');

//Вычислить бюджет на месяц
accumulatedMonth = getExpensesMonth( money, amount1, amount2, getAccumulatedMonth );
console.log('Бюджет на месяц: ', accumulatedMonth );


console.log('цель будет достигнута за: ',getTargetMonth( accumulatedMonth, mission ), ' месяцев');

budgetDay = Math.floor(accumulatedMonth/30);
console.log('бюджет на день: ', budgetDay);
getStatusIncome(budgetDay);