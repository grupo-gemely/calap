jQuery(document).ready(function($){




	/************** Gallery Hover Effect ********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox ********************/
	$(function(){
		$('.lightbox1 .box .boxInner a').lightbox();
		$('a[rel=lightbox2]').lightbox();
	});


});
