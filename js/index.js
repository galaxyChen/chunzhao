	var swiper1=new Swiper(".swiper-container",{
		direction:'vertical',
		initialSlide: 1,
		speed: 800,
		onSlideChangeEnd:function(swiper)
		{
			if (swiper.activeIndex==0)
				addAnimate(-1);
			else removeAnimate(-1);
		}
	});
	var swiper2=new Swiper(".swiper-container-2",{
		direction:'horizontal',
		initialSlide: 5,
		speed: 800,
		onSlideChangeEnd: function(swiper)
		{
			if (swiper.activeIndex==4)
				swiper.lockSwipeToNext();
			else swiper.unlockSwipeToNext();
			addAnimate(swiper.activeIndex);
			removeAnimate(swiper.previousIndex);
		}
	});
	var swiper3=new Swiper(".swiper-container-3",
	{
		direction:'horizontal',
		initialSlide: 0,
		effect: 'fade',
		speed: 800,
		fade: {
			 crossFade: false,
		}

	});





function originSetting()
{
//index page setting
var main=document.getElementById('main');
var length=main.clientHeight*0.28;
var inside=document.getElementById('inside-1');
var size=length*0.19*0.5;
$('#big').css('height',length+'px');
$('#big').css('width',length+'px');
$('#big').css('transform','rotate(45deg)');
$('#big').css('font-size',size+'px');
//activity page setting
var length=main.clientHeight*0.18;
var len=main.clientHeight*0.10;
size=main.clientHeight*0.022;
$('.backImg').css('height',length+'px');
$('.backImg').css('width',length+'px');
$('.lastImg').css('height',len+'px');
$('.nextImg').css('width',len+'px');
$('#departure').css('font-size',size+'px');
//bbt
$('#bbt').css('font-size',size+'px');
$('#backB').css('height',length+'px');
$('#backB').css('width',length+'px');
var position=(main.clientWidth-length)/2;
$('#backB').css('left',position+'px');
//triangle
//var triangle=document.getElementById('triangle');
var border_bottom=triangle.clientHeight*1.01;
var border=triangle.clientWidth*0.49;
var center=main.clientHeight*0.50;
var size=main.clientHeight*0.024;
var line=main.clientHeight*0.03;
$('.left').css('border-right-width',border+'px');
$('.right').css('border-left-width',border+'px');
$('.left').css('border-bottom-width',border_bottom+'px');
$('.right').css('border-bottom-width',border_bottom+'px');
$('.center').css('height',center+'px');
$('.center').css('width',center+'px');
$('.center').css('font-size',size+'px');
}

function addAnimate(index)
{
	switch (index)
	{
		case 4:
			$('#text-4-up').addClass('lightSpeedIn');
			$('#text-4-down').addClass('lightSpeedIn')
			break;
		case 3:
			$('#text-3-up').addClass('zoomIn');
			$('#text-3-down').addClass('zoomIn')
			break;
		case 2:
			$('#text-2-up').addClass('slideInLeft');
			$('#text-2-down').addClass('slideInRight');
			break;
		case 1:
			$('#text-1-up').addClass('zoomIn');
			$('#text-1-down').addClass('zoomIn')
			break;
			
		case 0:
			$('#text-0-up').addClass('slideInLeft');
			$('#text-0-down').addClass('slideInRight');
			break;

		case -1:
			$('#bbt-1').addClass('fadeInUp');
			setTimeout("$('#bbt-2').addClass('fadeInUp');",400);
			setTimeout("$('#backB').addClass('fadeInUp');",500);
			break;
	}
}

function removeAnimate(index)
{
	switch (index)
	{
		case 4:
			$('#text-4-up').removeClass('lightSpeedIn');
			$('#text-4-down').removeClass('lightSpeedIn')
			break;
		case 3:
			$('#text-3-up').removeClass('zoomIn');
			$('#text-3-down').removeClass('zoomIn')
			break;
		case 2:
			$('#text-2-up').removeClass('slideInLeft');
			$('#text-2-down').removeClass('slideInRight');
			break;
		case 1:
			$('#text-1-up').removeClass('zoomIn');
			$('#text-1-down').removeClass('zoomIn')
			break;
			
		case 0:
			$('#text-0-up').removeClass('slideInLeft');
			$('#text-0-down').removeClass('slideInRight');
			break;
		case -1:
			$('#bbt-1').removeClass('fadeInUp');
			$('#bbt-2').removeClass('fadeInUp');
			$('#backB').removeClass('fadeInUp');
			break;
	}
}

window.onload=function()
{
	swiper1.lockSwipeToNext();
	swiper1.lockSwipeToPrev();
	swiper2.lockSwipeToNext();
	swiper2.lockSwipeToPrev();
	originSetting();
	$('#loading-text').removeClass('animated-infinite');
	$('#loading-text').removeClass('flash');
	$('#loading-text').addClass('animated');
	$('#loading-text').addClass('fadeOut');
	$('#cover').addClass('fadeOut');
	setTimeout("$('#cover').remove();",1100);
	$('#big').addClass('pulse');
	setTimeout("$('#big').removeClass('pulse');",1000);
}

$('#guide-1').bind('click',function()
{
	swiper1.unlockSwipeToPrev();
	swiper1.slidePrev();
	swiper1.lockSwipeToPrev();
})

$('#guide-2').bind('click',function()
{
	//window.location.href="";
	alert("百步梯线上报名开始时间为9月11号12:40，敬请关注~");
})

$('#guide-3').bind('click',function()
{
	swiper2.unlockSwipeToNext();
	swiper2.unlockSwipeToPrev();
	swiper2.slideTo(0,400);

})

$('#guide-4').bind('click',function()
{
	swiper1.unlockSwipeToNext();
	swiper1.slideNext();
	swiper3.unlockSwipeToNext();
	swiper3.unlockSwipeToPrev();
	swiper3.slidePrev();
	swiper1.lockSwipeToNext();
})

$('.back-3').bind('click',function()
{
	swiper3.slideTo(0);
	swiper1.unlockSwipeToPrev();
	swiper1.slidePrev();
	swiper1.lockSwipeToPrev();
})

$('.last-3').bind('click',function()
{
	swiper3.slidePrev();
})

$('.next-3').bind('click',function()
{
	swiper3.slideNext();
})

$('.last-2').bind('click',function()
{
	swiper2.slidePrev();
})

$('.next-2').bind('click',function()
{
	swiper2.slideNext();
})

$('.back-2').bind('click',function()
{
	swiper2.unlockSwipeToNext();
	swiper2.slideTo(5);
	swiper2.lockSwipeToPrev();
	swiper2.lockSwipeToNext();
})

$('#backB').bind('click',function()
{
	swiper1.unlockSwipeToNext();
	swiper1.slideNext();
	swiper1.lockSwipeToNext();
})

