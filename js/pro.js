// get all element

let bestprice = document.getElementById('price-total');
let memorytotal = document.getElementById('memory-total');
let storagetotal = document.getElementById('storage-total');
let deliverychargetotal = document.getElementById('charge-total');
let alltotal = document.getElementById('all-total');
let totalwithpromo = document.getElementById('total-with-promo');
let inputtext = document.getElementById('promo-input-text');
let applypromo = document.getElementById('promo-btn');


// function for calculation

function totalit(){
    alltotal.innerText=parseFloat(bestprice.innerText)+parseFloat(memorytotal.innerText)+parseFloat(storagetotal.innerText)+parseFloat(deliverychargetotal.innerText);

    totalwithpromo.innerText=alltotal.innerText;
}

// promo code function

function promoit(event){
    if(event.target.value=='stevekaku'){
        applypromo.addEventListener('click',function(){
            totalwithpromo.innerText=parseInt(alltotal.innerText * .8);
        })
    }
    else{
        applypromo.addEventListener('click',function(){
            totalwithpromo.innerText=alltotal.innerText;
        })
    }
}

// button

// memory
document.getElementById('clicked-btn1').addEventListener('click',function(){
    document.getElementById('memory-total').innerText='00';

    totalit()
})
document.getElementById('clicked-btn2').addEventListener('click',function(){
    document.getElementById('memory-total').innerText='180';

    totalit()
})


// storage
document.getElementById('clicked-btn3').addEventListener('click',function(){
    document.getElementById('storage-total').innerText='00';

    totalit()
})
document.getElementById('clicked-btn4').addEventListener('click',function(){
    document.getElementById('storage-total').innerText='100';

    totalit()
})
document.getElementById('clicked-btn5').addEventListener('click',function(){
    document.getElementById('storage-total').innerText='180';

    totalit()
})


// delivery
document.getElementById('clicked-btn6').addEventListener('click',function(){
    document.getElementById('charge-total').innerText='00';

    totalit()
})
document.getElementById('clicked-btn7').addEventListener('click',function(){
    document.getElementById('charge-total').innerText='20';

    totalit()
})

innerText.addEventListener('keyup',promoit)