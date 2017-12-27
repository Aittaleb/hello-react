const express = require('express');

var app = new express();

app.use(express.static('public'));

// var array = [1,2,3,3,4,4,4,4,6,5];
// var uniqArray = array.filter((elem,i,array) => {
//     return array.indexOf(elem) === i;
// })
// console.log(uniqArray);
// var sum = array.reduce((previous,curr,i,array) => previous+curr);
// console.log(sum);
// console.log(array);
// var hh = array.map((value , i , array) => value+i);
// console.log(hh); 


app.listen(3000,() => {
    console.log('server is up on port 3000');
});

