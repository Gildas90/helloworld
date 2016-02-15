/**
 * Created by Сергей on 15.02.2016.
 */


//var fruit = ['cherries', 'apples', 'bananas'];
//
//console.log(fruit);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    // a must be equal to b
    return 0;
});
console.log(items);