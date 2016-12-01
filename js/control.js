var dialog_index = 1;
//每次点击后对话框的文本索引值dialog_index自加1，初次索引值为1


$(document).ready(function(){
	$(function(){
    	$('#bgi').height($(window).height());
    	$('#bgi').width($(window).width());
	});

	$('#mi').attr('src','image/dave_normal.png');
	//$('#dia').attr('src','image/dialog.png').hide();调试后启用
	$('#dia').attr('src','image/dialog.png').hide();
	$('#text').hide();
	
	$('#mi').click(function(){

		//通过此函数变换图片
		if(/^[3-6]$/.test(dialog_index)){
			$('#mi').attr('src','image/dave_happy.png');
		}else if(/^[7-9]|1[0-7]$/.test(dialog_index)){
			$('#mi').attr('src','image/dave_mknote.png');
		}else if(/^1[8-9]$/.test(dialog_index)){
			$('#mi').attr('src','image/dave_sohappy.png');
		}else if(/^20|2[0-7]$/.test(dialog_index)){
			$('#mi').attr('src','image/dave_shyness.png');
		}else if(/^2[8-9]|30$/.test(dialog_index)){
			$('#mi').attr('src','image/dave_shyness.png');
		}else if(/^3[1-5]$/.test(dialog_index)){
			$('#mi').attr('src','image/jerry_hello.png');
		}else if(dialog_index==36){
			$('#minion').fadeOut;
			$('#dialog').fadeOut;
		}else{
			$('#mi').attr('src','image/dave_normal.png');
		}



		if(dialog_index==1){

				$('#dia').fadeIn();
				$('#text').html($('#'+dialog_index).html()).fadeIn();
				dialog_index++;

		}else{

			$('#dia').animate({
			left:'+=400px',
			top:'+=400px',
			width:'0%',
			},300);
			$('#text').animate({
			left:'+=10px',
			top:'+=10px',
			opacity:'0',
			},30);
			$('#mi').animate({top:'-=20px'},120);
			$('#mi').animate({top:'+=20px'},120);
			$('#mi').animate({top:'-=15px'},80);
			$('#mi').animate({top:'+=15px'},80);
			$('#mi').animate({top:'-=5px'},60);
			$('#mi').animate({top:'+=5px'},60,function(){
				$('#text').html($('#'+dialog_index).html());
				$('#dia').animate({
					left:'-=400px',
					top:'-=400px',
					width:'100%',
				},300);
				setTimeout(function(){$('#text').animate({
					left:'-=10px',
					top:'-=10px',
					opacity:'1',
				},30);}
				,250);
				dialog_index++;
			});
		}
		

	});

	

	





});
