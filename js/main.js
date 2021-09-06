const div1 = document.getElementById('first');
const div2 = document.getElementById('second')
const div3 = document.getElementById('third');

const description = document.getElementById('desc');
const imgPrice = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express')
const shippingCost = document.getElementById('shipping')
const total = document.getElementById('total')

const fullViewImg = document.getElementById('full-view');

div1.addEventListener('click', function(){
    fullViewImg.src = 'images/1.jpg';
    description.innerText = " First description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus, asperiores qui quas vero consectetur odio eligendi odit excepturi commodi!";
    imgPrice.innerText = '850';
    updateTotalPrice()

})
div2.addEventListener('click', function(){
    fullViewImg.src = 'images/2.jpg';
    description.innerText = " Second description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus, asperiores qui quas vero consectetur odio eligendi odit excepturi commodi!";
    imgPrice.innerText = '650';
    updateTotalPrice()
})
div3.addEventListener('click', function(){
    fullViewImg.src = 'images/3.jpg';
    description.innerText = " Third description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum necessitatibus, asperiores qui quas vero consectetur odio eligendi odit excepturi commodi!";
    imgPrice.innerText = '550';
    updateTotalPrice()
})

free.addEventListener('click', function(){
    shippingCost.innerText = '5';
})
express.addEventListener('click', function(){
    shippingCost.innerText = '30';
})

//updateTotal price
function updateTotalPrice(){
    const imagePrice = Number(imgPrice.innerText);
    const shippingCharge = Number(shippingCost.innerText);
    const totalProductprice = imagePrice + shippingCharge;
    total.innerText = totalProductprice;
}
