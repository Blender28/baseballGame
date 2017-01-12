$(document).ready(function(){
	var $width = $(window).height();
	var $height = $(window).width();
	$('#baseballgame').css({"width":$width,"height":$height});
	$('#figure1').draggable();
	$('#figure2').draggable();
	$('#figure3').draggable();
	$('#figure4').draggable();
	$('#figure5').draggable();
	$('#figure6').draggable();
	$('#figure7').draggable();
	$('#figure8').draggable();
	$('#figure9').draggable();
	$('#batter1').draggable();
	$('#batter2').draggable();
	$('#batter3').draggable();
	$('#batter4').draggable();
	$('#ball').draggable();
});