// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {
  
  $(function(){

    var $window = $(window);
    var $body   = $(document.body);

    var navHeight = $('.navbar').outerHeight(true) + 220;

    $body.scrollspy({
      target: '.aside-menu',
      offset: navHeight
    });

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })


    $('.aside-menu').on('activate.bs.scrollspy', function () {
        var example = $('.example');
        var navItem = $('.aside-menu__lists > li'); 
        example.hide();
        navItem.each(function(){
          var elem = $(this);
          if(elem.hasClass('active') && elem.find("li.active").size() < 1) {
            var attrValue = elem.attr('data-target');
            $('.example[data-type=' + attrValue + ']').show();            
          } else {
            if (elem.find("li.active").size() > 0) {
              var c_attr_value = elem.find('[data-target].active').attr('data-target');
              $('.example[data-type=' + c_attr_value + ']').show();
            };
          }
        })  
    });

    $window.on('load', function () {
      $body.scrollspy('refresh');
    });

    setTimeout(function () {
      var $sideBar = $('.aside-menu');

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top;
            var navOuterHeight = $('.navbar-default').height();

            return (this.top = offsetTop - navOuterHeight);
          }
        }
      })
    }, 100);


    var devicePreview = $('.device');
    var navOuterHeight = $('.navbar-default').height();

    if(devicePreview.length) {
      var orgDeviceTop = devicePreview.offset().top;

      function onScroll() {
        if($(window).scrollTop() > orgDeviceTop) {
          if( !devicePreview.hasClass('affix') ) {
            devicePreview
              .css({
                left: Math.round(devicePreview.offset().left) + 'px',
                top: Math.round(navOuterHeight - 115) + 'px' 
              })
              .removeClass('affix-top')
              .addClass("affix");
            }
        } else {
          devicePreview.removeClass('affix').addClass("affix-top").css({left: 'auto', top: 0});
        }

      }
      $(window).resize(function(){
        devicePreview
            .removeClass("affix")
            .css({
              left: 'auto'
            });
        onScroll();
      });
      $(window).scroll(onScroll);
      onScroll();
    }
})

}(window.jQuery)

