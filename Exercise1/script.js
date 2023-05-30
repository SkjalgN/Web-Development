

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

//the grass
ctx.fillStyle ='greenyellow';
ctx.fillRect(0,0,width,height);

//the sky
ctx.fillStyle ='paleturquoise' ;
ctx.fillRect(0,0,width,height/2);

//the sun
const centerX = canvas.width * 6 / 7;
const centerY = canvas.height / 8;
const radius = 20;
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.fill();

//the house
ctx.fillStyle = 'lightblue';
ctx.fillRect(280, 140, 150, 110);

