var s = 0;
$(".show").click(function(){
	//alert($(this).children(".showList"))
	if(s==0){
		$(this).children(".showList").slideDown();
		s = 1;
	}else{
		$(this).children(".showList").slideUp();
		s = 0;
	}
})
var ipt = document.querySelectorAll(".list_item input");
$("#btn1").click(function(){
	//$(".list_item").children("input").checkked = true;
//	alert(1)
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=true;
		}
})
$("#btn2").click(function(){
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=false;
		}
})
$("#btn3").click(function(){
	for(var i = 0;i<ipt.length;i++){
			ipt[i].checked=!ipt[i].checked;
		}
})
$("#change").click(function(){
	$(".videoList_newList").css("visibility","hidden");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$("#back").click(function(){
	$(".videoList_newList").css("visibility","inherit");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$("#lick").click(function(){
	$(".c_listTab").css("display","block");
	$(".tabs_item pt10 hide").css("display","none");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$("#zhuanlan").click(function(){
	$(".c_listTab").css("display","none");
	$(".tabs_item pt10 hide").css("display","block");
	$(this).addClass("noBl active").siblings("li").removeClass();
})
$(".tab_title").children("li").click(function(){
	$(this).children().addClass("active");
	$(this).siblings().children().removeClass();
	$(".smList").children().addClass("show");
	$(".smList").children().siblings().removeClass("show");
})
