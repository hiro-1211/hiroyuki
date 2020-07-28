$(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      return false;
    });


    

//     $('#lg-wrapper1').css('display','none');
//     $('.figure1').hover(
//         function(){
//         $('.lcs').fadeOut('fast',function(){
//              $('#lg-wrapper1').fadeIn('slow');
//         });
//       },

//       function(){
//         $('#lg-wrapper1').fadeOut('fast', function(){
//             $('.lcs').fadeIn('slow');
//         });
//       });
      
//           // ----------------------------------

      
//           $('#lg-wrapper2').css('display','none');
//     $('.figure2').hover(
//         function(){
//         $('.lcs').fadeOut('fast',function(){
//              $('#lg-wrapper2').fadeIn('slow');
//         });
//       },

//       function(){
//         $('#lg-wrapper2').fadeOut('fast', function(){
//             $('.lcs').fadeIn('slow');
//         });
//       });
            
//                         // ----------------------------------
//    $('#lg-wrapper3').css('display','none');
//     $('.figure3').hover(
//         function(){
//         $('.lcs').fadeOut('fast',function(){
//              $('#lg-wrapper3').fadeIn('slow');
//         });
//       },

//       function(){
//         $('#lg-wrapper3').fadeOut('fast', function(){
//             $('.lcs').fadeIn('slow');
//         });
//       });



      (function($) {
        var $body   = $('body');
        var $btn   = $('.toggle_btn');
        var $mask  = $('#mask');
        var open   = 'open'; // class
        // menu open close
        $btn.on( 'click', function() {
          if ( ! $body.hasClass( open ) ) {
            $body.addClass( open );
          } else {
            $body.removeClass( open );
          }
        });
        // mask close
        $mask.on('click', function() {
          $body.removeClass( open );
        });
      } )(jQuery);


    });



