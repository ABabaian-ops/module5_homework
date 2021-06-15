let arr = [11, "Апельсин", 1, 54];
alert(arr.length);
arr.forEach(function(item, i, arr) {
    alert(i + ": " + item + " (массив:" + arr + ")");
});