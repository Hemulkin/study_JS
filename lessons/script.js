'use strict';


let appData = {
    income: {}, //дополнительные доходы
    addIncome: [], //
    expenses: {}, // возможные расходы
    addExpenses: [],
    deposit: false,
    persentDeposit: null,
    periodDeposit: null,
    moneyDeposid: null,
    mission: 1000000,
    period: 12,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    payMonth: 0,
    asking: function(){
        if ( confirm('Есть ли у вас дополнительный зароботок?') ){
            let itemIncome, cashIncome;
            do{
            itemIncome = prompt('Какой у вас дополнительный заработок','такси');
            } while( itemIncome === '' || itemIncome === null );

            do{
            cashIncome = prompt('Какой доход это приностит?', 10000);
            } while(cashIncome === '' || cashIncome === null || isNaN(cashIncome) );
            
        
        appData.income[itemIncome] = cashIncome;
        }

        let addNewExpenses = prompt('Перечислите возможные расходы');
        addNewExpenses = addNewExpenses.toLowerCase();
        appData.addExpenses = addNewExpenses.split(', ');
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
    },

    getInfoDeposit: function(){
        if ( appData.deposit ){
            do{
            appData.persentDeposit = Number( prompt('какой годовой процент?', 10 ) );
            } while (appData.persentDeposit===''||appData.persentDeposit===null||isNaN( appData.persentDeposit ));

            do{
                appData.moneyDeposid = Number( prompt('какая сумма заложена', 1000) );
            } while ( appData.moneyDeposid===''||appData.moneyDeposid === null||isNaN( appData.moneyDeposid ) );

            do{
            appData.periodDeposit = Number( prompt('На какой период?', 3) );
            } while( appData.periodDeposit === ''||appData.periodDeposit === null||isNaN( appData.periodDeposit ));
            
        }
    },

    calcSaveMoney: function(){
      return  appData.budgetMonth * appData.periodDeposit;
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
if (appData.getTargetMonth() > 0){
    console.log('цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
}
console.log('бюджет на день: ', appData.budgetDay);
appData.getStatusIncome();

for( let key in appData ){
    console.log( key , ' : ', appData[key] );
}

for( let key in appData.addExpenses ){
    appData.addExpenses[key] = appData.addExpenses[key][0].toUpperCase() + appData.addExpenses[key].slice(1);
}
console.log(appData.addExpenses.join(', '));
