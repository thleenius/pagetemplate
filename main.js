$('#go-button').click(function() {
	
	var color = $('#color-input').val();
	console.log(color);

	var pointsize = $('#pointsize-input').val();
	console.log(pointsize);

	var packsize = $('#packsize-input').val();
	console.log(packsize);

	$('.color').html(color);
	$('.point-size').html(pointsize);
	$('.pack-size').html(packsize);
});