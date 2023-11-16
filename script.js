"use strict";


;(function accordion(){
    let parent = document.querySelector('.week__days');
    function text__remove(){
        let arr__active = document.querySelectorAll('.active');
        for(let elem of arr__active){
            elem.classList.remove('active');
        }
        let arr__rotate = document.querySelectorAll('.text__plus--rotate');
        for(let elem of arr__rotate){
            elem.classList.remove('text__plus--rotate');
        }
    }
    parent.addEventListener('click', function(event){
        let check = event.target.parentNode.classList;
        if(check[0] == 'days__aside' || check[0] == 'days__tab'){
            text__remove();
            event.target.parentNode.parentNode.classList.toggle('active');
            event.target.parentNode.classList.toggle('active');
            let elem = event.target.parentNode.querySelector('.text__plus')
            elem.classList.toggle('text__plus--rotate')
        }
    })
})();