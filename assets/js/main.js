$(function () {
  $('[data-faq] .faq-q').on('click', function () {
    const $btn = $(this);
    const $answer = $btn.next('.faq-a');
    const isOpen = $btn.attr('aria-expanded') === 'true';

    // 1つだけ開く仕様
    $('[data-faq] .faq-q').attr('aria-expanded', 'false');
    $('[data-faq] .faq-a').attr('hidden', true);

    if (!isOpen) {
      $btn.attr('aria-expanded', 'true');
      $answer.removeAttr('hidden');
    }
  });
});

 // slick slider
  if ($('.facility-slider').length) {
    $('.facility-slider').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    });
  }