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
            if(check[0] == 'days__aside'){
                if(!event.target.parentNode.parentNode.classList.contains('active')){
                    text__remove();
                }
                event.target.parentNode.parentNode.classList.toggle('active');
            }else if(check[0] == 'days__tab'){
                if(!event.target.parentNode.classList.contains('active')){
                    text__remove();
                }
                event.target.parentNode.classList.toggle('active');
            }
            let elem = event.target.parentNode.querySelector('.text__plus')
            elem.classList.toggle('text__plus--rotate')
        }
        
    })
})();

new Swiper('.feedback__people', {
    navigation: {
        nextEl: '.swiper-button-next', // стрелки управления
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // возможность перетаскивать скролл
    },
    simulateTouch: true, // включение/отключение свайпа
    touchRatio: 1, // чувствительность свайпа
    touchAngle: 45, // угол срабатывания
    grabCursor: true, // курсор перетаскивания
    
    slideToClickedSlide: true, // переключение при клике на слайд
    hashNavigation:{
        watchState: true, // отслеживать состояние, адрес сайта
    },
    
    keyboard: {
        enabled: true, // включить/выключить
        onlyInViewport: true, // включить/выключить управление стрелками
        pageUpDown: true, // управление клавишами pageUp pageDown
    },
    mousewheel: {
        sensitivity: 1, //  чувствительность колеса мыши
        eventsTarget: '.feedback__people', // к чему мы обращаемся
    },
    autoHeight: true, // если слайды разные по высоте, автоматическая подстройка
    slidesPerView: 3, // кол-в слайдов в превью, можно писать дробные числа.
    watchOverflow: true, // отключение слайдера, если элементов меньше
    slidesPerGroup: 1, // пролистывание слайдов
    initialSlide: 0, // стартовый слайд, не работает
    loop: true, // бесконечность
    freeMode: true, // свободный режим, без фиксированных

    autoplay: { // авто прокрутка
        delay: 2000,
        stopOnLastSlide: false, // Остановиться на последнем слайде
        disableOnInteraction: true, // отключить после ручного переключения
    },
    speed: 1000, // плавность переключения слайдов
    effect:'slide', // slide, fade, flip, cube, coverflow

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        744: {
            slidesPerView: 2,
        },
        1084: {
            slidesPerView: 3,
        },
    },

    
});