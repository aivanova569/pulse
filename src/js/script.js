$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
          {
            breakpoint: 993,
            settings: {
              dots: true,
              arrows: false,
              adaptiveHeight: false
            }
          }
        ]
  });

  /*--- Tabs ---*/
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.tabs-container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  /*--- More-Back btn ---*/
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modals

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, .modal').fadeOut('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });
  

  // Validate forms

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, укажите ваше имя",
        phone: "Пожалуйста, укажите ваш номер телефона",
        email: {
          required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
        }
      }
    });
  }

  validateForms('#consultation form');
  validateForms('#order form');
  validateForms('#consultation-form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");


  // Smooth scroll and page up

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.page-up').fadeIn('slow');
    } else {
      $('.page-up').fadeOut('slow');
    }
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});