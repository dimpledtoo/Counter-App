'use strict';


let count = 0;


document.querySelector('.btn1').addEventListener('click', function () {
    count -= 1;
    if (count <= 0) count = 0;
    document.querySelector('#count').innerHTML = count;
})

document.querySelector('.btn2').addEventListener('click', function () {
    count = 0;
    document.querySelector('#count').innerHTML = count;
})

document.querySelector('.btn3').addEventListener('click', function () {
    count += 1;
    document.querySelector('#count').innerHTML = count;
})
