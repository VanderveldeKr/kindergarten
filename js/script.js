function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
    }
    }
}
burgerMenu('.burger-menu');

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        950: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });

const swiper_two = new Swiper('.swiper-two', {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    }
    });

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', function() {
    if (window.innerWidth <= 950) {
        swiper_two.params.slidesPerView = 1; // Изменяем slidesPerView на 1 при ширине окна менее или равной 950px
    } else {
        swiper_two.params.slidesPerView = 2; // Иначе вернем slidesPerView обратно на 2
    }
    
    swiper_two.update(); // Обновляем слайдер, чтобы применить изменения
    });

const reviewsSwiper = new Swiper(".swiper-reviews", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

    // Добавим слушателя изменения размера экрана
    window.addEventListener('resize', function() {
    // Получаем ширину экрана
        var windowWidth = window.innerWidth;

    // Если ширина экрана меньше или равна 950px, устанавливаем slidesPerView в 1
    if (windowWidth <= 950) {
        reviewsSwiper.params.slidesPerView = 1;
    } else {
        reviewsSwiper.params.slidesPerView = 4;
    }
    
    // Обновляем слайдер с новыми параметрами
    reviewsSwiper.update();
    });
