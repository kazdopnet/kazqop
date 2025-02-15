    var total = 0;
       function CalculateTotal(){
          $("#cal input:checkbox").each(function(){
              if($(this).is(":checked")){
                  total += parseFloat($(this).val());
              }
          });
          $("#total").html(total);
       }
       
       $("input:checkbox").change(function(){
          total = 0;
          CalculateTotal();
       }).trigger("change");


$(".tab_cont a.tab").click(function(e) {
  e.preventDefault();
  $(".tab_cont a.tab").removeClass('active');
  $(this).addClass('active');
})   
 $('[data-fancybox^="quick-view"]').fancybox({
  animationEffect   : "fade",
  animationDuration : 300,
  scrolling : 'no',
  margin : 0,
  gutter : 0,
  touch  : {
    vertical: false
  },
  baseTpl	:
  '<div class="fancybox-container" role="dialog" tabindex="-1">' +
  '<div class="fancybox-bg"></div>' +
  '<div class="fancybox-inner">' +
  '<div class="fancybox-stage"></div>' +
  '<div class="fancybox-form-wrap">' +
  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
  '<svg viewBox="0 0 40 40">' +
  '<path d="M10,10 L30,30 M30,10 L10,30" />' +
  '</svg>' +
  '</button></div>' +
  '</div>' +
  '</div>',
  onInit: function(instance) {

    /*

        #1 Add product form
        ===================

    */

    // Find current form element ..
    var current = instance.group[instance.currIndex];
    instance.$refs.form = current.opts.$orig.parent().find('.product-form');

    // .. and move to the container
    instance.$refs.form.appendTo( instance.$refs.container.find('.fancybox-form-wrap') );

    /*

        #2 Create bullet navigation links
        =================================

    */
    var list = '', 
        $bullets;
    
    for ( var i = 0; i < instance.group.length; i++ ) {
      list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + ( i + 1 ) + '</span></a></li>';
    }

    $bullets = $( '<ul class="product-bullets">' + list + '</ul>' ).on('click touchstart', 'a', function() {
      var index = $(this).data('index');

      $.fancybox.getInstance(function() {
        this.jumpTo( index );
      });

    });
    
    instance.$refs.bullets = $bullets.appendTo( instance.$refs.stage );

  },
  beforeShow : function( instance ) {

    // Mark current bullet navigation link as active
    instance.$refs.stage.find('ul:first')
      .children()
      .removeClass('active')
      .eq( instance.currIndex )
      .addClass('active');

  },
  afterClose: function(instance, current) {

    // Move form back to the place
    instance.$refs.form.appendTo( current.opts.$orig.parent() );

  }
});
            $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                items: 1,
                lazyLoad:true,
                loop: false,
                center: true,
                margin: 0,
                autoHeight:true,
                callbacks: true,
                URLhashListener: true,
                autoplay:false,
                autoplayHoverPause: false,
                startPosition: 'URLHash',
                animateOut: 'fadeOut'
              });
              $('.desktop_block ul.nav li').click(function(){
                    $('li').removeClass("active");
                    $(this).addClass("active");
                });
            })


             