function changeBackdrop(){
	console.log("in changebackdrop function");
	var imageBox = $('#imagebox');
	var imageLink = imageBox.val();
	var canvas = $('#canvas')[0];
	var ctx = canvas.getContext("2d");
	var img = new Image();
	img.onload = function(){
		// ctx.moveTo(0,550);
		// ctx.lineTo(700,550);
		ctx.canvas.width = img.width;
		ctx.canvas.height = img.height;
		ctx.canvas.style.border = "1px solid black";
		ctx.drawImage(img,0,0);
		// ctx.stroke();
	}
	img.src = imageLink;
}

	