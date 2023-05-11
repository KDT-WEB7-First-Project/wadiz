// swiper JS 라이브러리 - 슬라이드배너
const swiper = new Swiper('.wrap', {
    navigation :{
        nextEl :".swiper-button-next", 
        prevEl :".swiper-button-prev" 
    }, 
    pagination :{
        el : ".swiper-pagination", 
        clickable: true,
        type: 'progressbar',
    }, 
    loop: true, //순환여부 결정 
    speed : 500, //슬라이딩 속도 
    direction : "horizontal", //슬라이딩 방향 vertical:세로 
    spaceBetween : 0, //사이간격( 숫자 px )
    slidesPerView : 1, // 하나의 화면당 보일 패널의 갯수 
    grabCursor : true, //마우스 커서 모양 변경 
    //자동롤링 
    autoplay :{
        delay:1000, 
        disableOnInteraction : true 
    } 
 });

//  slick 라이브러리 이용 배너 슬라이드
$( document ).ready( function() {
	$('.responsive').slick({
    infinite: true,
    speed: 300,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    slidesToShow: 11,
    slidesToScroll: 8,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      }
    ]
  });

  } );
 
let click = document.querySelector('.a');

$('.box a').click(function(e){
  e.preventDefault();
})

 // nav 클릭이벤트
 const tabButton = $('.nav-items li a');
 const  tabContent = $('.cards');

 for (let i =0; i< tabButton.length; i++){
   tabButton.click(function(e){
     e.preventDefault();
     if(event.target ==document.querySelectorAll('.nav-items li a')[i]){
       openTab(i)
     }
   })
 }

 function openTab(i){
   tabButton.removeClass('ons');
   tabContent.removeClass('click');
   tabButton.eq(i).addClass('ons');
   tabContent.eq(i).addClass('click');
 }
 // 스크롤 

 $(".up").click(function(){
 window.scrollTo({top : 0, behavior: 'smooth'}); 
 });


