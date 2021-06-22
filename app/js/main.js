$(function () {

    $('.slider__inner').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.navigation__btn-mob, .navigation__item a').on('click', function (event) {
        $('.navigation__btn-mob').toggleClass('navigation__btn-active');
        $('.navigation__items').toggleClass('navigation__items-active');
        $('body').toggleClass('lock');
    });

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    // $(".navigation__item a").on("click", function (e) {
    //     //отменяем стандартную обработку нажатия по ссылке
    //     e.preventDefault();

    //     //забираем идентификатор бока с атрибута href
    //     var id = $(this).attr('href'),

    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //         top = $(id).offset().top;

    //     //анимируем переход на расстояние - top за 1500 мс
    //     $('body,html').animate({ scrollTop: top }, 2500);
    // });



});