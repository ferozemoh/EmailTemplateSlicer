window.onload = function(){
	var tool = new paper.Tool();
	
	//draw a new line on template when clicked
	tool.onMouseDown = function(event){
		var point = new paper.Point(0,event.point.y);
		var canvas = $('#myCanvas')[0]; 
		var size = new paper.Size(1100, 2);
		var path = new paper.Path.Rectangle(point, size);
		path.strokeColor = 'red';
		path.fillColor = 'red';
		paper.view.draw();
	}
}

//change the background of the canvas to the given image 
function changeBackdrop(){
	
	var canvas = $('#myCanvas')[0];
	paper.setup(canvas);
	//setting up canvas with paper

	var imageBox = $('#imagebox')
	var imageLink = imageBox.val();
	var img = new Image();
	canvas.style.background = "url(" + imageLink + ")"; //change the background of the canvas
	img.src = imageLink; //changing image source to the link given in textbox

	//changing height and width of canvas to that of image	
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.style.border = "1px solid black";
	
}

