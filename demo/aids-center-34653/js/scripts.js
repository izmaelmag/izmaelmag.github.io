'use strict';

(function (window) {

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

(function (window) {

  if (window.innerWidth > 520) {
    var setupSections = function setupSections() {
      var zIndex = 500;

      bodyHeight = sections.reduce(function (prev, section) {
        section.style.zIndex = zIndex--;
        section.dataset.offset = prev;

        return prev + section.clientHeight;
      }, 0);

      mainContainer.style.height = bodyHeight + 'px';
    };

    var changeHeaderMonth = function changeHeaderMonth(month) {
      currentMonth = month;
      headerTitle.classList.add('hide');

      window.setTimeout(function () {
        headerTitle.textContent = month;
        headerTitle.classList.remove('hide');
      }, 300);
    };

    var checkScroll = function checkScroll() {
      scrolled = window.scrollY;

      sections.forEach(function (section) {
        var topBound = parseInt(section.dataset.offset);
        var bottomBound = parseInt(topBound + window.innerHeight);
        var month = section.dataset.month;

        if (topBound <= scrolled + 20 || topBound <= scrolled - 20 && bottomBound >= scrolled) {
          section.classList.add('current');
          section.style.webkitTransform = 'translateY(' + (scrolled - topBound) * -1 + 'px)';
        }

        if (topBound <= scrolled && bottomBound >= scrolled && currentMonth != month) {
          changeHeaderMonth(month);
        }

        if (topBound + section.clientHeight - 64 <= scrolled) {
          section.classList.remove('current');
        }
      });
    };

    var mainContainer = qs('.body');
    var sections = qsAll('.month', mainContainer);
    var headerTitle = qs('.header h1');

    var bodyHeight = window.innerHeight;

    window.setupSections = setupSections;

    var scrolled = 0;
    var currentMonth = '';

    checkScroll();
    // setupSections();
    window.addEventListener('scroll', function (e) {
      window.requestAnimationFrame(checkScroll);
    });
  }
})(window);
'use strict';

(function (window) {
  var sliders = qsAll('.slider');

  sliders.forEach(function (sliderNode) {
    var cards = $(sliderNode).find('.card');

    if (window.innerWidth > 520 && cards.length > 3 || window.innerWidth <= 520 && cards.length > 1) {

      $(sliderNode).append('\n        <button class="next"></button>\n        <button class="prev"></button>\n      ');

      var next = qs('.next', sliderNode);
      var prev = qs('.prev', sliderNode);

      cards.wrap('<div class="slide"></div>').parent();

      var slider = new Flickity(sliderNode, {
        cellAlign: 'left',
        draggable: true,
        freeScroll: false,
        wrapAround: true,
        cellSelector: '.slide',
        accesibility: true,
        adaptiveHeight: window.innerWidth <= 520,
        prevNextButtons: false,
        pageDots: window.innerWidth <= 520,
        on: {
          ready: function ready() {
            if (window.innerWidth > 520) {
              window.setupSections();

              setTimeout(function () {
                $(sliderNode).find('.slide').animate({ height: '100%' }, 100);
                window.setupSections();
              }, 500);
            }
          }
        }
      });

      slider.on('dragMove', function (event, pointer, moveVector) {
        if (moveVector.x > 0) {
          prev.classList.add('active');
        } else if (moveVector.x < 0) {
          next.classList.add('active');
        }
      });

      slider.on('dragEnd', function (event, pointer) {
        next.classList.remove('active');
        prev.classList.remove('active');
      });

      next.addEventListener('click', function () {
        slider.next();
      });

      prev.addEventListener('click', function () {
        slider.previous();
      });
    }
  });
})(window);