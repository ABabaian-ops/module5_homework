let somenumber = prompt('Enter number'); +
typeof(somenumber);
if (isNaN(somenumber)) { alert('Упс кажется вы ошиблись') } else {
    if (somenumber % 2 === 0) {
        alert('Число ' + somenumber + ' четное!')
    } else {
        alert('Число ' + somenumber + ' нечетное!')
    }
};