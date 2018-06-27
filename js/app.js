document.addEventListener('DOMContentLoaded', function() {
  const options = {};
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  const options = {
    fullWidth: true,
    indicators: true,
  };
  const elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  const options = {
    interval: 6000,
    indicators: true,
  };
  var elems = document.querySelectorAll('.slider');
  M.Slider.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems);
});
