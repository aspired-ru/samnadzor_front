!(function($) {
  var startIndex = 3;

  $(document).ready(function() {
    var slider = $('#reviews-slider');
    var dots = $('#review-icons').children();
    var buttons = dots.children();

    slider.slick({
      autoplay: false,
      arrows: false,
      dots: false,
      draggable: false
    });

    dots.click(function(e) {
      var item = $(this);
      var index = item.index();
      slider.slick('goTo', index);
    });

    slider.on('beforeChange', function(e, slider, current, next) {
      dots.find('.active').removeClass('active');
      dots.eq(next).find('.review-icon').addClass('active');
    });

    slider.slick('slickGoTo', startIndex);
  });

})(window.jQuery);