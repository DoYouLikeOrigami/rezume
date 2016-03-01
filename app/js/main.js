"use strict";

var mainModule = (function () {

  var
    mainHeader = $('.mainHeader'),
    w = $(window),
    sandwich = $('#sandwich'),
    menuLink = $('.mainMenu__link'),
    menuButton = $('.menuButton'),
    mainMenu = $('.mainMenu'),
    topText = $('.top__text'),
    portfolioLink = $('.portfolioItem__content-link');

  //функция прослушки
  //запускает остальные функции при событиях их вызова
  var _setUpListners = function () {
    w.load(_hideLoader);
    w.on('resize', _heightDetect);
    sandwich.on('click', _toggleSandwich);
    menuLink.on('click', _toggleSandwich);
    menuLink.on('click', _hideMenu);
    sandwich.on('click', _toggleMenu);
    portfolioLink.on('click', _showPopup);
    $("a.mainMenu__link").mPageScroll2id();
  };

  //функция запуска по дефолту
  var _defaultRun = function () {
    _heightDetect();
  };

  //функция прячет прелоадер при загрузке страницы
  var _hideLoader = function () {
    $(".loader__inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
  };

  //служебная функция для изменения внешнего вида кнопки вызова меню
  var _toggleSandwich = function () {
    sandwich.toggleClass('active');
  };

  //функция установки высоты первого экрана под высоту экрана
  var _heightDetect = function () {
    mainHeader.css('height', w.height());
  };

  //функция смены состояния меню показано/скрыто 
  var _toggleMenu = function () {
    if (mainMenu.hasClass('hidden')) {
      mainMenu.fadeIn(600);
      mainMenu.removeClass('hidden');
      topText.addClass('opacify');
    } else {
      _hideMenu();
    };
  };

  //функция, которая прячет навигационное меню
  var _hideMenu = function () {
    mainMenu.fadeOut(600);
    mainMenu.addClass('hidden');
    topText.removeClass('opacify');
  };  

  //Функция показа попапа с инфой про проект
  var _showPopup = function (e) {
    e.preventDefault();

    var bPopup = $('.portfolioItem__popup'),
        number = $(this).data('number');

    bPopup.each(function(i, val) {
      //по дата аттрибуту определяет, для какого проекта какой попап показывать
      if ($(val).data('number') === number) {
        $(val).bPopup({
          speed: 850,
          transition: 'slideDown',
          opacity: 0.75
        });
      }
    });
    
  };

  return {
    init: function () {
      _setUpListners();
      _defaultRun();
    }
  };

})();

mainModule.init();
