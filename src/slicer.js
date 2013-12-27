var canvas;
var ctx;
window.onload = function(){
	//slicing area
	canvas = $('#canvas')[0];
	ctx = canvas.getContext("2d");
	canvas.addEventListener('mousedown', function(evt){
		var mousePos = getMousePos(evt);	
		drawLine(ctx,mousePos);
	},false);
};

function changeBackdrop(){
	console.log("in changebackdrop function");
	var imageBox = $('#imagebox');
	var imageLink = imageBox.val();
	var img = new Image();
	img.onload = function(){
		ctx.canvas.width = img.width; //changing height and width of canvas to that of image
		ctx.canvas.height = img.height;
		ctx.canvas.style.border = "1px solid black";
		ctx.drawImage(img,0,0); //draw given image onto canvas
	}
	img.src = imageLink; //changing image source to the link given in textbox
}

function drawLine(ctx,mousePos){
	console.log('in drawLine');
		ctx.moveTo(0,mousePos.y)
		ctx.lineTo(ctx.canvas.width,mousePos.y);
	ctx.stroke();
}

// returns the coordinates of the mouse position on the canvas
function getMousePos(evt){
	var rect = canvas.getBoundingClientRect();
	return{
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}
