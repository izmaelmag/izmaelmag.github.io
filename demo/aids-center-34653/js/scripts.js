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
  var mainContainer = qs('.body');
  var sections = qsAll('.month', mainContainer);
  var headerTitle = qs('.header h1');

  var bodyHeight = window.innerHeight;

  function setupSections() {
    var zIndex = 500;

    bodyHeight = sections.reduce(function (prev, section) {
      section.style.zIndex = zIndex--;
      section.dataset.offset = prev;

      return prev + section.clientHeight;
    }, 0);

    mainContainer.style.height = bodyHeight + 'px';
  }
  window.setupSections = setupSections;

  var scrolled = 0;
  var currentMonth = '';

  function changeHeaderMonth(month) {
    currentMonth = month;
    headerTitle.classList.add('hide');

    window.setTimeout(function () {
      headerTitle.textContent = month;
      headerTitle.classList.remove('hide');
    }, 300);
  }

  function checkScroll() {
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
  }

  checkScroll();
  // setupSections();
  window.addEventListener('scroll', function (e) {
    window.requestAnimationFrame(checkScroll);
  });
})(window);
'use strict';

(function (window) {
  var sliders = qsAll('.slider');

  sliders.forEach(function (sliderNode) {

    var slider = new Flickity(sliderNode, {
      cellAlign: 'left',
      draggable: true,
      freeScroll: false,
      wrapAround: true,
      // groupCells:      3,
      cellSelector: '.card',
      accesibility: true,
      adaptiveHeight: false,
      prevNextButtons: false,
      pageDots: false,
      on: {
        ready: function ready() {
          console.log('ready');
          window.setupSections();

          var viewport = qs('.flickity-viewport', sliderNode);

          var timeout = void 0;
          var currentStyles = viewport.getAttribute('style');

          console.log(viewport, currentStyles);

          timeout = window.setTimeout(function () {
            window.setupSections();
          }, 1000);
        },
        settle: window.setupSections
      }
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