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

(function () {
  var ill = qs('#illustration');

  ill.addEventListener('load', function (e) {
    console.log(e);
    setupSections();
  });
})();
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

          if (section.classList.contains('current')) {
            TweenMax.to(section, 0.3, {
              y: (scrolled - topBound) * -1
            });
          }

          var nextMonthNode = section.nextSibling.nextSibling;

          if (nextMonthNode) {
            TweenMax.to(nextMonthNode, 0.3, { y: 0 });
          }
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
  var sliders = qsAll('.slider--media');

  sliders.forEach(function (sliderNode) {
    $(sliderNode).append('\n      <button class="next"></button>\n      <button class="prev"></button>\n    ');

    var next = qs('.next', sliderNode);
    var prev = qs('.prev', sliderNode);

    var slider = new Flickity(sliderNode, {
      cellAlign: 'center',
      draggable: true,
      freeScroll: false,
      wrapAround: true,
      cellSelector: '.slide',
      accesibility: true,
      adaptiveHeight: false,
      prevNextButtons: false,
      pageDots: true
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
  });
})(window);
'use strict';

(function (window) {
  var sliders = qsAll('.slider');

  sliders.forEach(function (sliderNode) {
    var cards = $(sliderNode).find('.card');
    var heights = [];

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
        adaptiveHeight: false,
        prevNextButtons: false,
        pageDots: window.innerWidth <= 520,
        on: {
          ready: function ready() {
            cards.each(function () {
              heights.push($(this).height());
            });

            var maxHeight = Math.max.apply(null, heights);

            cards.each(function () {
              if (window.innerWidth < 520) {
                // maxHeight += 55;
              }

              $(this).height(maxHeight);
            });

            $(sliderNode).parent().addClass('section--collapsed');

            // setTimeout(() => {
            //   let sliderHeight = $(sliderNode).height();
            //   $(sliderNode).height(sliderHeight + 40);
            // }, 500);

            // Настройка слайдов на десктопе
            if (window.innerWidth > 520) {
              window.setupSections();

              setTimeout(function () {
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