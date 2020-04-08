'use strict';

let appData = {
    income: {}, //дополнительные доходы
    addIncome: [], //
    expenses: {}, // возможные расходы
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 12,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    payMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке');

        let expenses1, amount1, num = 0;
        do{
           if ( !confirm('Есть ли у вас дополнительные расходы?') ){
               break;
           }
            num++;
            do{
                expenses1 = prompt('Статья расходов № '+ num );
                amount1 = prompt('Во сколько это обойдется?', 5000);
                if ( isNaN(amount1) || amount1 === '' || amount1 === null ){
                    alert('Возможно вы неверно ввели сумму!');
                } else {
                    break;
                }
            } while( true );
            appData.expenses[expenses1] = Number( amount1 ); // “ответ на первый вопрос” : “ответ на второй вопрос”,
            //while( isNaN(amount1) || amount1 === '' || amount1 === null );
        }while( true );
    }
};

let start = function(){
    let money;
    do{
        money = prompt('выш ежемесячный доход', 10000);
    } while( isNaN(money) || money === '' ||  money === null);
    appData.payMonth = Number(money);
};

const getExpensesMonth = function( ){

    for( let key in appData.expenses ){
        appData.expensesMonth += appData.expenses[key];
    }
    //return appData.expensesMonth;
};

const getBudget = function(){
    appData.budgetMonth = appData.payMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor( appData.budgetMonth / 30 );
    //return appData.budgetMonth, appData.budgetDay;
};

const getTargetMonth = function(){

    appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    //return appData.period;

};

const getStatusIncome = function(){
    Number(appData.budgetDay);
    if( appData.budgetDay > 1200 ){
        console.log('У вас высокий уровень дохода');
    } else if( appData.budgetDay > 600 && appData.budgetDay <= 1200 ){
        console.log('У вас средний уровень дохода');
    } else if( appData.budgetDay <= 600 ){
        console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if ( appData.budgetDay < 0 ){
        console.log('что то пошло не так');
    } else if ( appData.budgetDay === 0 ){
        console.log('Работаешь за еду');
    }
};


appData.getExpensesMonth = getExpensesMonth;
appData.getBudget = getBudget;
appData.getTargetMonth = getTargetMonth;
appData.getStatusIncome  = getStatusIncome;

start();
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
let budgetDay, accumulatedMonth;


//Вычислить бюджет на месяц
accumulatedMonth = appData.budgetMonth;
console.log('Бюджет на месяц: ', accumulatedMonth );
// Расходы за месяц
console.log('Расходы за месяц:', appData.expensesMonth);
console.log('цель будет достигнута за: ' + appData.getTargetMonth( appData.budgetMonth, appData.mission ) + ' месяцев');
console.log('бюджет на день: ', appData.budgetDay);
appData.getStatusIncome();

for( let key in appData ){

    console.log( key , ' : ', appData[key] );

}
