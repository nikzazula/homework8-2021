// Variables!
var radius = 5;
var coord = {x:0, y:0};

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
ctx.canvas.width = 0.75 * window.innerWidth;
ctx.canvas.height = 0.75 * window.innerHeight;
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var main = document.querySelector("main")
var chosen_color = "#ff0000";
var draw_bool;

//LISTENERS!!
//------------------------------------------
//Add a listener for loading the window
window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});
//Add a listener for the color picker
colorPicker.addEventListener('input', function(e){
	chosen_color = this.value;
	console.log('drawing color is now: ');
	console.log(chosen_color);
})
//------------------------------------------
//Add a listener for the mouse movement (started below)
canvas.addEventListener('mousemove', start);
//------------------------------------------
//Add a listener for the key events (started below)
//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	var key = e.key;
	switch(key){
		//up arrow
		case 'ArrowUp': case 38:
			console.log('not drawing!');
			draw_bool = false;
			break;
		//down arrow
		case 'ArrowDown': case 40:
			console.log('start drawing!');
			draw_bool = true;
			break;
		//space bar
		case ' ': case 32:
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			console.log('canvas cleared!');
			break;
		//r
		case 'r':
			console.log('drawing in red!');
			chosen_color = "#ff0000";
			break;
		//b
		case 'b':
			console.log('drawing in blue!');
			chosen_color = "#0000ff";
			break;
		//g
		case 'g':
			console.log('drawing in green!');
			chosen_color = "#00ff00";
			break;
		//y
		case 'y':
			console.log('drawing in yellow!');
			chosen_color = "#ffff00";
			break;
	}
})
//------------------------------------------

//FUNCTIONS
//responsive resize
function canvas_size(){
	ctx.canvas.width = 0.75 * window.innerWidth;
	ctx.canvas.height = 0.75 * window.innerHeight;
}
window.addEventListener("resize", canvas_size);

//start drawing
function start(e) {
	document.addEventListener("mousemove", draw);
	reposition(e);
  }
//resposition for drawing
function reposition(e) {
	coord.x = e.clientX - canvas.offsetLeft;
	coord.y = e.clientY - canvas.offsetTop;
  }
//drawing function
function draw(e){
	if(draw_bool === true){
		ctx.beginPath();
		ctx.lineCap = "round";
		ctx.lineWidth = radius;
		ctx.strokeStyle = chosen_color;
		ctx.moveTo(coord.x, coord.y);
		reposition(e);
    	ctx.lineTo(coord.x, coord.y);
    	ctx.stroke();
	}
}

