/*jshint esversion: 7 */

let start = function(){
    let money;
    do{
        money = prompt('выш ежемесячный доход', 10000);
    } while( isNaN(money) || money === '' ||  money === null);
    return money;
}

const getExpensesMonth = function( setMoney, callback ){

    do{
        expenses1 = prompt('Продукты?');
        amount1 = prompt('Во сколько это обойдется?', 5000);
    } while( isNaN(amount1) || amount1 === '' || amount1 === null );

    do{
        expenses2 = prompt('ЖКХ?');
        amount2 = prompt('Во сколько это обойдется?', 2000);
    } while( isNaN(amount2) || amount2 === '' || amount2 === null );
    let exp = amount1 + amount2;
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


//Вычислить бюджет на месяц
accumulatedMonth = getExpensesMonth( start(), getAccumulatedMonth );
console.log('Бюджет на месяц: ', accumulatedMonth );


console.log('цель будет достигнута за: ',getTargetMonth( accumulatedMonth, mission ), ' месяцев');

budgetDay = Math.floor(accumulatedMonth/30);
console.log('бюджет на день: ', budgetDay);
getStatusIncome(budgetDay);