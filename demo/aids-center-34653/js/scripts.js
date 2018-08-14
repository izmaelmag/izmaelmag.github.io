'use strict';

(function () {

  var header = qs('.header');
  var scrollLimit = window.innerHeight / 2;

  window.addEventListener('resize', function (e) {
    scrollLimit = window.innerHeight / 2;
  });

  window.addEventListener('scroll', function (e) {
    var scrolled = window.scrollY;

    if (scrolled > scrollLimit) {
      header.classList.remove('hidden');
    } else {
      header.classList.add('hidden');
    }
  });
})(window);
"use strict";

function qs(query) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  return container.querySelector(query);
}

function qsAll(query) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  return [].slice.call(container.querySelectorAll(query));
}
'use strict';

(function () {
  var sliders = qsAll('.slider');

  sliders.forEach(function (sliderNode) {
    var slider = new Flickity(sliderNode, {
      cellAlign: 'left',
      draggable: true,
      freeScroll: false,
      wrapAround: true,
      groupCells: false,
      cellSelector: '.card',
      accesibility: true,
      adaptiveHeight: false,
      prevNextButtons: false,
      pageDots: false
    });

    qs('.next', sliderNode).addEventListener('click', function (e) {
      e.preventDefault();
      slider.next();
    });

    qs('.prev', sliderNode).addEventListener('click', function (e) {
      e.preventDefault();
      slider.previous();
    });
  });
})(window);