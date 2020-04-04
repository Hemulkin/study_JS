/*jshint esversion: 6 */
//1
let lang, out;
const   ru = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
        en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const obj = {
    RU : 'Пн Вт Ср Чт Пт Сб Вс ',
    EN : 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'
};
        lang = prompt('Выберите язык', 'RU');
        lang.toUpperCase();

if( lang == 'RU'){
    console.log(ru);
    document.getElementById('out1').innerHTML = ru;
} else if( lang == 'EN' ){
    console.log(en);
    document.getElementById('out1').innerHTML = en;
}

switch(lang){
    case 'RU':
        document.getElementById('out2').innerHTML = ru;
    break;
    case 'EN':
        document.getElementById('out2').innerHTML = en;
    break;
}

document.getElementById('out3').innerHTML = obj[lang];


//2
let namePerson;
namePerson = prompt();
out = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
document.getElementById('out4').innerHTML = out;