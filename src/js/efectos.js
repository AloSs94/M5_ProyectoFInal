import $ from 'jquery'
//funciones
/* let Parallax = Parallax() ;*/

$(function(){
    $('.nav-menu a').each(function(i){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'

        },2000 + (i * 500));
    });

    //header
    if($(window).width() > 800){

        $('.Introduccion img').css({
            opacity: '0',
            marginTop: '0'
        })

        $('.Introduccion img').animate({
            opacity: '1',
            marginTop: '0'
        },1500,"linear");

    
    let Menu;
    Menu = $('.menu');

    let Nav;
    Nav = $('.nav-menu');

    $(window).scroll(()=>{

      let scroll = window.scrollY;

        scroll> 400 ? (Menu.addClass("color"),
        Nav.addClass("color")):(Menu.removeClass("color"),Nav.removeClass("color"))
    });
}



let Links = $('li .navlinks');
    
    Links.each(function(){

        $(this).click((e) =>{
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        });
    });

  
});

