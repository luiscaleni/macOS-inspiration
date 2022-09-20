//loader
setTimeout(() => {
    $('#load-p').fadeOut(1000, function(){
        $('#load-p').addClass("hide-loader");
    });
    $('#loader').fadeOut(1000, function(){
        $('#loader').addClass("hide-loader");
    });
    $('#load').fadeOut(1000, function(){
        $('#load').addClass("hide-loader");
    });
}, 2000);

//
/*
setTimeout(() => {
    $('.bar-Block').css('margin-bottom','-100px');
}, 0);*/

setTimeout(() => {
    $('.dockCont').fadeIn(1000, function(){
        $('.dockCont').css('bottom','10px');
    });
    $('.header').fadeIn(1000, function(){
        $('.header').css('top','27px');
    });
}, 3000);

//mostrar
function mostrar() {
    var x = document.getElementById('folder');
    if (x.style.display === 'none') {
        setTimeout(function(){ $(".folder").addClass("magicUP");}, 0001);
        x.style.display = 'block';
    }else {
        setTimeout(function(){ $(".folder").addClass("magicUP");}, 0001);
        x.style.display = 'block';
    }

    //menu
    var z = document.getElementById('menu');
    if (z.style.display === 'none') {
        setTimeout(function(){ z.style.display = 'flex';}, 300);
    }else {
        //z.style.display = 'flex';
        setTimeout(function(){ z.style.display = 'flex';}, 300);
    }
}

//ocultar
function ocultar() {
    var x = document.getElementById('folder');
    var z = document.getElementById('menu');
    if (x.style.display === 'block') {
        setTimeout(function(){ $(".folder").addClass("magic"); }, 0001);
        setTimeout(function(){ $(".folder").removeClass("magicUP"); }, 1000);
        setTimeout(function(){ $(".folder").removeClass("magic"); }, 1000);
        setTimeout(function(){ x.style.display = 'none';}, 1000);
        z.style.display = 'none';
    }else {
        x.style.display = 'none';
        z.style.display = 'none';
    }

    //menu
    var z = document.getElementById('menu');
    if (z.style.display === 'block') {
        z.style.display = 'none';
    }else {
        z.style.display = 'none';
    }
}


//jump
$(function(){
    $('.item').on('click', function(){
      setTimeout(function(){ $(".animate").removeClass("animate"); }, 1000);
       $(this).addClass("animate");
    });
  });

//Efecto Burbuja
$(document).ready(function(){
    $('.dockCont').on("mouseover", function(){
        $(this).addClass('hoverC');
    });
    $('.item').on("mouseover", function(){
        $(this).addClass('hover2');
        let value2 = document.querySelector('.hover2');
        
        let prev = value2.previousElementSibling;
        let prevPrev = prev.previousElementSibling;
        let next = value2.nextElementSibling;
        let nextNext = next.nextElementSibling;

        prevPrev.classList.add('hover0');
        prev.classList.add('hover1');
        next.classList.add('hover3');
        nextNext.classList.add('hover4');
    });
    
    $('.dockCont').on("mouseout", function(){
        $(this).removeClass('hoverC');
    });
    $('.item').on("mouseout", function(){
        $(this).removeClass('hover2');
        let value0 = document.querySelector('.hover0');
        let value1 = document.querySelector('.hover1');
        let value3 = document.querySelector('.hover3');
        let value4 = document.querySelector('.hover4');

        if (value0){
            value0.classList.remove('hover0');
        }
        if (value1) {
            value1.classList.remove('hover1');
        }
        if (value3) {
            value3.classList.remove('hover3');
        }
        if (value4) {
            value4.classList.remove('hover4');
        }
    });
});