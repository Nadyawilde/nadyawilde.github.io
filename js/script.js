$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        prevArrow:"<button type='button' class='slick-prev left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next right'><i class='fa fa-angle-right'aria-hidden='true'></i></button>",
        
      });   
      
      $('.carousel__second').slick({
        arrows:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true,
        prevArrow:"<button type='button' class='slick-prev left_2'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next right_2'><i class='fa fa-angle-right'aria-hidden='true'></i></button>",
        
        

      }); 
      $('.carousel__clients').slick({
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        variableWidth: true,
        arrows:true,
        autoplay: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'aria-hidden='true'></i></button>",
        
      }); 
      $('.carousel__aircompany').slick({
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        variableWidth: true,
        arrows:true,
        autoplay: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'aria-hidden='true'></i></button>",
        
      }); 
     
      $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
  $("#s1").click(function(){
    $(".fa-star").css("color", "grey");
    $("#s1").css("color", "yellow");
  })
  $("#s2").click(function(){
    $(".fa-star").css("color", "grey");
    $("#s1,#s2").css("color", "yellow");
  })
  $("#s3").click(function(){
    $(".fa-star").css("color", "grey");
    $("#s1,#s2,#s3").css("color", "yellow");
  })
  $("#s4").click(function(){
    $(".fa-star").css("color", "grey");
    $("#s1,#s2,#s3,#s4").css("color", "yellow");
  })
  $("#s5").click(function(){
    $(".fa-star").css("color", "grey");
    $(".fa-star").css("color", "yellow");
  })

  
  $(".form_agency").validate({
      rules:{
         name:{
           required: true,
         },
         company:{
           required: true,
         },
         email:{
           required:true,
           email: true
         }
      },
      messages:{
        name:{
          required: "Обязательно для заполнения", 
      },
        company:{
        required: "Обязательно для заполнения",
        },
        email:{
        required: "Обязательно для заполнения",
        email: "Неправильно введен адрес почты"
        }
      }
  
   
});
$(".form_order").validate({
  rules:{
     name_two:{
       required: true,
     },
     number:{
       required: true,
     },
     
  },
  messages:{
    name_two:{
      required: "Обязательно для заполнения", 
  },
    number:{
    required: "Обязательно для заполнения",
    number: true
    },
  }


});


  });
  
  
