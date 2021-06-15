let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]

]);
for (let name of fruits.keys()) {
    for (let val of fruits.values()) {
        console.log("Ключ-" + name + "," + "Значение-" + val)
    }
};