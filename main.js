var mouseEvent="empty";
var last_position_of_X , last_position_of_Y ;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("col").value;
    width_of_line=document.getElementById("width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last Position of X and Y coordinates = ");
        console.log("X = "+last_position_of_X+ "Y = "+last_position_of_Y);
        ctx.moveTo(last_position_of_X , last_position_of_Y);
        console.log("Current Position of X and Y coordinates = ");
        console.log("X = "+current_position_of_mouse_X+ "Y = "+current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X , current_position_of_mouse_Y);
        ctx.stroke();
    } 
    last_position_of_X=current_position_of_mouse_X;
    last_position_of_Y=current_position_of_mouse_Y
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}
function cleararea() {
    ctx.clearRect(0,0 ,ctx.canvas.width,ctx.canvas.height);
}