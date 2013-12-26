	function changeBackdrop(){
		console.log("in changebackdrop function");
		var imageBox = $('#imagebox');
		var imageLink = imageBox.val();
		var canvas = $('#canvas')[0];
		var ctx = canvas.getContext("2d");
		var img = new Image();
		img.onload = function(){
			ctx.drawImage(img,0,0);
			// ctx.moveTo(0,550);
			// ctx.lineTo(700,550);
			ctx.stroke();
		}
		img.src = imageLink;
	}