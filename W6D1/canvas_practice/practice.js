document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById('mycanvas');
  canvas.height = 500;
  canvas.width = 500;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(0,0,150)';
  ctx.fillRect(0,0,500,500);

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 10;
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.arc(250,250,250,0,2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 10;
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.arc(250,250,250,0,2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 10;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.arc(130,150,75,0,2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(370,150,75,0,2 * Math.PI);
  ctx.stroke();
  ctx.fill();


  ctx.beginPath();
  ctx.arc(250,300,125,0, 2 *Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgb(249,211,165)';
  ctx.ellipse(210, 270, 60, 85, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(290, 270, 60, 85, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(250, 370, 100, 50, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.ellipse(210, 270, 30, 60, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(290, 270, 30, 60, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.ellipse(230, 290, 10, 30, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(270, 290, 10, 30, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250,330,30,0, 2 *Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.ellipse(250, 390, 75, 20, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.ellipse(250, 400, 20, 10, 2 * Math.PI, 0, 2 * Math.PI);
  ctx.fill();












});
