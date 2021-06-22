$(function () {

    $('.slider__inner').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });


    $(".navigation__items a").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });



});