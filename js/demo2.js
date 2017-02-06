
  $(function(){
    $(window).scroll(function(){
      //导航栏
                  if ($(window).scrollTop()>=60){
                    $('.nav-bar a').css('color','#000000')
                    $('.nav-frame').stop(false,true).slideDown(500);
                  }else{ 
                    $('.nav-frame').stop(false,true).slideUp(500);  
                    $('.nav-bar a').css('color','#ffffff')        
                  }
               })
    //导航栏按钮
    $('.tail,.tail-dd').click(function(){
          $('html,body').animate({scrollTop:$('.footer').offset().top},1000);    
      })
   //第二导航栏
      $('.nav-2').click(function(){
            $(this).find(".nav-dl").stop(false,true).slideToggle(600);
                 
      })
    //文字
  $(document).ready(function(){
    var Height_h = $(window).height()*0.7,
        home3_p = $('.home-3 .home-box3').offset().top - Height_h,
        home4_p = $('.home-4 .home-box4').offset().top - Height_h,
        home5_p = $('.home-5 .home-box5').offset().top - Height_h;
    $(window).scroll(function(){
      var top_h = $(this).scrollTop()
      if (top_h >= home3_p) {
            $('.home-3 .home-box3').addClass('act')
      }
      if(top_h >= home4_p){
            $('.home-4 .home-box4').addClass('act')
      }
      if(top_h >= home5_p){
            $('.home-5 .home-box5').addClass('act')
      }
    })
  })

   //返回顶部
  	$(window).scroll(function(){
  		if ($(window).scrollTop()>=700) {
  			$(".top img").stop(false,true).fadeIn(1000)
  		}else{
        $(".top img").stop(false,true).fadeOut(1000)
      }
  	})

  	$(".top img ,.nav-top1").click(function(){
          if($(window).scrollTop()){
            $("html,body").animate({scrollTop:0},1000)
          }
        })
  })



