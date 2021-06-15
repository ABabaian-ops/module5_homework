let x = true;
let xt = typeof x;
if (xt == 'number')
    console.log(x + "-Число")
if (xt === 'string')
    console.log(x + "-Строк")
if (xt === 'boolean')
    console.log(x + "-boole")
else console.log("Тип x не определён")