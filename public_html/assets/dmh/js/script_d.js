 $(document).ready(function() {
  $('.top_cont .logo').addClass('animated fadeInLeft');
  $('.top_cont .tel_cont').addClass('animated fadeInRight');
  $('.promo_text_cont h1.title').addClass('animated fadeIn');
  $('.title_text_cont').addClass('animated fadeIn');
  $('.calc_block .overall_cont').addClass('animated fadeIn');
  $('.calc_block .button_cont').addClass('animated fadeIn');
  $('.select_plan_block .left').addClass('animated fadeInLeft');
  $('.calc_block .tab_row_cont').addClass('fadeInLeft');
  $('.calc_block .input_cont').addClass('fadeInLeft');
  $('.calc_block .list_cont').addClass('fadeInUp');
  $('.select_plan_block .right').addClass('animated fadeInRight');
  $('.right_im').addClass('animated fadeInRight');
  $('.select_plan_block .title').addClass('animated fadeInDown');
  $('.about_text_block .title').addClass('fadeInRight');
  $('.about_text_block .txt_r').addClass('fadeInRight');
  $('.footer_cont .form_cont').addClass('animated fadeInRight wow');
  $('.portfolio_block .txt_l').addClass('fadeInLeft');
  $('.services_block .title_cont').addClass('fadeInLeft');
  $('.mobile_block .text_cont .white').addClass('fadeInLeft wow');
  $('.tablet_block .text_cont .black').addClass('fadeInRight wow');
  $('.logo img').hover(
     function() {
      $(this).addClass('animated bounce'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('animated bounce'); // Убираем класс
     }
    )
    $('.top_cont .tel_cont li').hover(
     function() {
      $(this).addClass('animated pulse'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('animated pulse'); // Убираем класс
     }
    )
})
function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$( document ).ready(function(){
equalHeight($('.list_cont li'));
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
});
$(document).ready(function() {
	$("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
});