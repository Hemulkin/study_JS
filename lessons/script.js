'use strict';

let askQuestion = function(){
    let hiddenNumber = Math.floor( Math.random() * 100 + 1 );
    console.log('hiddenNumber: ', hiddenNumber);

    let coreQuestion = function(){
        let question = prompt('Угадай число от 1 до 100');
        let questionNumber = Number(question);
        if ( question === null ){
            return;
        } else if (isNaN(question) || question === '' || question === ' ' ){
            alert('Введите число');
            coreQuestion();
        } else if (questionNumber < hiddenNumber){
            alert('Введенное число меньше загаданного');
            coreQuestion();
        } else if (questionNumber > hiddenNumber){
            alert('Введенное число больше загаданного');
            coreQuestion();
        } else if (questionNumber === hiddenNumber ){
            alert('Верно!');
        } 
    };
    coreQuestion();
};
askQuestion();

