/*================================================================
 * Constants
 */
var
  GLOBAL_SCROLL = 0,
  CURRENT_PAGE = 0,
  PAGES_NAMES  = [
    'Главная',
    'Программа конференции',
    'Спикеры',
    'Награды',
    'Организаторы и партнеры'
  ],
  SETTINGS = {
    scrollsense: 50
  }
//================================================================






/*================================================================
 * Main thread
 */

window.onload = switchToHash;
window.onpopstate = handlePopState;

initApp();
//================================================================






/*================================================================
 * Functions
 */

// Запуск работы приложения
function initApp() {
  setNavigationListener();
  setSheduleListeners();
  setScrollListener();
  setExtraListeners();
  setGoBackListeners();
}





// Обработка выхода в варп-зону
function setExtraListeners() {
  var pagers = [].slice.call( document.querySelectorAll('.js-pager') );

  pagers.forEach( function(pager, i) {

    pager.onclick = function(e) {
      setCurrentPage(this.dataset.pagelink);
    }
  });
}


// Обработка клика по пункту меню
function setNavigationListener() {
  var nav_items = [].slice.call( document.querySelectorAll('.navigation__item') );

  nav_items.forEach(function(node, i, array) {

    node.onclick = function(e) {
      setCurrentPage(this.dataset.index);
    }

  });
}


// Обработка клика по дню в разделе расписания
function setSheduleListeners() {
  var day_items = [].slice.call( document.querySelectorAll('.shedule__nav-item') );

  day_items.forEach(function(node, i, array) {

    node.onclick = function(e) {
      switchSheduleNav(this.dataset.day);
      switchSheduleDay(this.dataset.day);
    }

  });
}


// Обработка клика на крестик в варп-зоне
function setGoBackListeners() {
  var crosses = [].slice.call( document.querySelectorAll('.section-title__close') );

  crosses.forEach(function(node, i) {
    node.onclick = function(e) {
      window.history.back();
    }
  });
}





// Регистрация события скроллинга на объекте windows
function setScrollListener() {
  if (window.addEventListener) {

    if ('onwheel' in document)
      window.addEventListener("wheel", onScroll);

    else if ('onmousewheel' in document)
      window.addEventListener("mousewheel", onScroll);

    else
      window.addEventListener("MozMousePixelScroll", onScroll);

  }

  else window.attachEvent("onmousewheel", onScroll);
}


// Обработка события скролла
function onScroll(e) {
  GLOBAL_SCROLL += e.deltaY / 10;

  CURRENT_PAGE > 0 ? dispatchScroll(GLOBAL_SCROLL) : console.log('You reached zone 00. Click on menu to activate main navigation');
}


// Обработка значения скролла
function dispatchScroll(value) {
  if (value === SETTINGS.scrollsense) {

    CURRENT_PAGE !== PAGES_NAMES.length ? CURRENT_PAGE++ : console.log('Last page reached');
    GLOBAL_SCROLL = 0;

    setCurrentPage(CURRENT_PAGE);

    console.log('Current page: ' + CURRENT_PAGE);
  }

  else if (value === (SETTINGS.scrollsense * -1) ) {

    CURRENT_PAGE !== 1 ? CURRENT_PAGE-- : console.log('First page reached');
    GLOBAL_SCROLL = 0;

    setCurrentPage(CURRENT_PAGE);

    console.log('Current page: ' + CURRENT_PAGE);
  }
}





// Переключение на пукнт меню по хэшу в url
function switchToHash(event) {
  var hash = parseInt( location.hash.substr(1) );

  if (hash) setCurrentPage(hash);
  else setCurrentPage(1);
}

// Переключение на страницу при перемещении по истории
function handlePopState(e) {
  setCurrentPage( parseInt(e.state.page) );
}





// Установка текущей страницы
function setCurrentPage(index) {

  window.history.pushState({page: index}, PAGES_NAMES[index - 1], "/#" + index);

  CURRENT_PAGE = index;

  var
    indexNode  = document.querySelector('.navigation__item[data-index="' + index + '"]'),
    activeNode = document.querySelector('.navigation__item.active');

  activeNode ? activeNode.classList.remove('active') : '';
  indexNode  ? indexNode.classList.add('active')     : '';

  switchSection(CURRENT_PAGE);
}


// Переключение активных секций
function switchSection(index) {
  var
    indexNode  = document.querySelector('section.page[data-page="' + index + '"]'),
    activeNode = document.querySelector('section.page.active');

  activeNode ? activeNode.classList.remove('active') : '';
  indexNode  ? indexNode.classList.add('active')     : '';
}


// Переключение навигации на странице расписания
function switchSheduleNav(n) {
  var
    indexNode  = document.querySelector('.shedule__nav-item[data-day="' + n + '"]'),
    activeNode = document.querySelector('.shedule__nav-item.active');

  activeNode ? activeNode.classList.remove('active') : '';
  indexNode  ? indexNode.classList.add('active')     : '';
}


// Переключение дней на странице расписания
function switchSheduleDay(n) {
  var
    indexNode  = document.querySelector('.shedule__day[data-day="' + n + '"]'),
    activeNode = document.querySelector('.shedule__day.active');

  activeNode ? activeNode.classList.remove('active') : '';
  indexNode  ? indexNode.classList.add('active')     : '';
}
//================================================================