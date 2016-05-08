/*prograss bar*/
$(function(){
	/*window가 load될때 bar들의 width를 바뀌게 만들었습니다.*/
	$(window).load(function(){
		$(".bar .bar00").css({"width":"670px"});
		$(".bar .bar01").css({"width":"700px"});
		$(".bar .bar02").css({"width":"600px"});
		$(".bar .bar03").css({"width":"530px"});
	});
	
	/*227x180 이미지 클릭시 blckimg로 바뀌게 만들었습니다.*/
	$("#ourStaff ul li img").mouseenter(function(){
		$(this).attr("src","img/semple/blackimg.png");	
	}).mouseleave(function(){
		$(this).attr("src","img/semple/img01.png");
	});

	$("#ourStaff .bottom02").click(function(){
		$(".nth6").fadeTo("opcity","0.3");
		alert("Cho Daon\nWeb Publisher");
			if(true){
				$(".nth6").fadeTo("opcity","1");
			}
	});
});