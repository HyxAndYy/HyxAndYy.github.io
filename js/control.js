var dialog_index = 1;
//每次点击后对话框的文本索引值dialog_index自加1，初次索引值为1


$(document).ready(function(){
	$(function(){
    	$('#bgi').height($(window).height());
    	$('#bgi').width($(window).width());
	});

	$('#mi').attr('src','image/dave_normal.png');
	$('#dia').attr('src','image/dialog.png');

	$('#mi').click(function(){
		$('#dia').animate({
			left:'+=400px',
			top:'+=400px',
			width:'0%',
		},300);
		$('#mi').animate({top:'-=20px'},120);
		$('#mi').animate({top:'+=20px'},120);
		$('#mi').animate({top:'-=15px'},80);
		$('#mi').animate({top:'+=15px'},80);
		$('#mi').animate({top:'-=5px'},60);
		$('#mi').animate({top:'+=5px'},60,function(){
			$('#dia').animate({
				left:'-=400px',
				top:'-=400px',
				width:'100%',
			},300);
		});	


	});

	

	





});
