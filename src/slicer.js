var lines;
var selected = false;
var selectedLoc;
window.onload = function(){
	var tool = new paper.Tool();
	lines = [];
	
	//draw a new line on template when clicked
	tool.onMouseDown = function(event){
		var draw = true;
		if(selected){
			//if a line is already selected, change its location
			//when clicked on another point
			lines[selectedLoc].position.y = event.point.y
			selected = false;
			lines[selectedLoc].strokeColor = 'purple';
			lines[selectedLoc].fillColor = 'purple';
		}else{
			//loop through the lines array to check if the clicked 
			//point is on a line
			for(var i=0;i<lines.length;i++){
				var currentLine = lines[i];
				if(currentLine.contains(event.point.y)){
					//line already exists
					currentLine.strokeColor = 'blue';
					currentLine.fillColor = 'blue';
					draw = false; //no need to draw a line
					selected = true; // a line is selected
					selectedLoc = i;
					break;
				}	
			}	
			if(draw){
				//draw the line since it doesn't exist
				var canvas = $('#myCanvas')[0];
				var point = new paper.Point(0,event.point.y);
				var size = new paper.Size(canvas.width, 4);
				var path = new paper.Path.Rectangle(point, size);
				path.strokeColor = 'purple';
				path.fillColor = 'purple';
				lines.push(path);
			}
		}
		paper.view.draw();
	}
}

//change the background of the canvas to the given image 
function changeBackdrop(){
	
	// paper.setup(canvas);
	//setting up canvas with paper

	var imageBox = $('#imagebox')
	var imageLink = imageBox.val();
	var img = new Image();
	img.src = imageLink; //changing image source to the link given in textbox
	img.onload = function(){
		var canvas = $('#myCanvas')[0];
		paper.setup(canvas);

		//changing height and width of canvas to that of image	
		canvas.style.background = "url(" + imageLink + ")"; //change the background of the canvas
		canvas.width = img.width;
		canvas.height = img.height;
		canvas.style.border = "1px solid black";
	}
	
}

