
function createCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;
    var angle = 0;
    var skycolor = 'paleturquoise';
    var sunColor = 'yellow';
    var houseColor = 'orangered';
    var woodColor = 'sienna';
    var grassColor = 'greenyellow';
    var windowColor = 'white';
    var isDay = true;

    $(document).ready(function () {
        $('#canvas').click(function (event) {
            var rect = canvas.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            if (mouseX > 400 && mouseX < 450 && mouseY > 30 && mouseY < 80 && isDay) {
                skycolor = 'darkblue';
                sunColor = 'white';
                houseColor = 'darkred';
                woodColor = 'saddlebrown';
                grassColor = 'darkgreen';
                windowColor = 'yellow';
                isDay = false;
                console.log('halla');
            }
            else if (mouseX > 400 && mouseX < 450 && mouseY > 30 && mouseY < 80 && !isDay) {
                skycolor = 'paleturquoise';
                sunColor = 'yellow';
                houseColor = 'orangered';
                woodColor = 'sienna';
                grassColor = 'greenyellow';
                windowColor = 'white';
                isDay = true;
                console.log('halla');
            }
        })
    });

    function updateCanvas() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //the grass
        ctx.fillStyle = grassColor;
        ctx.fillRect(0, 0, width, height);

        //the sky
        ctx.fillStyle = skycolor;
        ctx.fillRect(0, 0, width, height / 2);

        //the sun
        const centerX = canvas.width * 6 / 7;
        const centerY = canvas.height / 8;
        const radius = 20;
        ctx.fillStyle = sunColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        //the house
        ctx.fillStyle = houseColor;
        ctx.fillRect(310, 180, 130, 60);

        //the roof
        ctx.beginPath();
        ctx.moveTo(300, 180);
        ctx.lineTo(370, 140);
        ctx.lineTo(450, 180);
        ctx.fillStyle = woodColor;
        ctx.fill();
        ctx.closePath();

        //the door
        ctx.fillStyle = woodColor;
        ctx.fillRect(350, 200, 20, 40);

        //the window
        ctx.fillStyle = windowColor;
        ctx.fillRect(400, 200, 20, 20);

        //windmill
        var ceX = 150;
        var ceY = 120;
        var length = 75;
        var endX1 = ceX + length * Math.cos(angle);
        var endY1 = ceY + length * Math.sin(angle);
        var endX2 = ceX + length * Math.cos(angle + Math.PI / 2);
        var endY2 = ceY + length * Math.sin(angle + Math.PI / 2);
        var endX3 = ceX + length * Math.cos(angle + Math.PI);
        var endY3 = ceY + length * Math.sin(angle + Math.PI);
        var endX4 = ceX + length * Math.cos(angle + 3 * Math.PI / 2);
        var endY4 = ceY + length * Math.sin(angle + 3 * Math.PI / 2);

        // Draw the rotating line
        ctx.beginPath();
        ctx.moveTo(ceX, ceY);
        ctx.lineTo(endX1, endY1);
        ctx.moveTo(ceX, ceY);
        ctx.lineTo(endX2, endY2);
        ctx.moveTo(ceX, ceY);
        ctx.lineTo(endX3, endY3);
        ctx.moveTo(ceX, ceY);
        ctx.lineTo(endX4, endY4);
        ctx.moveTo(175, 300);
        ctx.lineTo(ceX, ceY);
        ctx.lineTo(125, 300);

        ctx.strokeStyle = woodColor;
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.closePath();

        angle += 0.01;
        requestAnimationFrame(updateCanvas);
    }
    updateCanvas();
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function createSVG() {
    const svg = document.getElementById('svg');
    const width = svg.width.baseVal.value;
    const height = svg.height.baseVal.value;
    var angle = 0;

    var skycolor = 'paleturquoise';
    var sunColor = 'yellow';
    var houseColor = 'orangered';
    var woodColor = 'sienna';
    var grassColor = 'greenyellow';
    var windowColor = 'white';
    var isDay = true;

    $(document).ready(function () {
        $('#svg').click(function (event) {
            var rect = svg.getBoundingClientRect();
            var mouseX = event.clientX - rect.left;
            var mouseY = event.clientY - rect.top;
            if (mouseX > 400 && mouseX < 450 && mouseY > 30 && mouseY < 80 && isDay) {
                skycolor = 'darkblue';
                sunColor = 'white';
                houseColor = 'darkred';
                woodColor = 'saddlebrown';
                grassColor = 'darkgreen';
                windowColor = 'yellow';
                isDay = false;
                console.log('halla');
            }
            else if (mouseX > 400 && mouseX < 450 && mouseY > 30 && mouseY < 80 && !isDay) {
                skycolor = 'paleturquoise';
                sunColor = 'yellow';
                houseColor = 'orangered';
                woodColor = 'sienna';
                grassColor = 'greenyellow';
                windowColor = 'white';
                isDay = true;
                console.log('halla');
            }
        })
    });

    function updateSVG() {
        svg.innerHTML = '';

        //the grass
        var grass = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        grass.setAttribute("x", 0);
        grass.setAttribute("y", 0);
        grass.setAttribute("width", width);
        grass.setAttribute("height", height);
        grass.setAttribute("fill", grassColor);
        svg.appendChild(grass);

        //the sky
        var sky = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        sky.setAttribute("x", 0);
        sky.setAttribute("y", 0);
        sky.setAttribute("width", width);
        sky.setAttribute("height", height / 2);
        sky.setAttribute("fill", skycolor);
        svg.appendChild(sky);

        //the sun
        const centerX = width * 6 / 7;
        const centerY = height / 8;
        const radius = 20;
        var sun = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        sun.setAttribute("cx", centerX);
        sun.setAttribute("cy", centerY);
        sun.setAttribute("r", radius);
        sun.setAttribute("fill", sunColor);
        svg.appendChild(sun);

        //the house
        var house = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        house.setAttribute("x", 310);
        house.setAttribute("y", 180);
        house.setAttribute("width", 130);
        house.setAttribute("height", 60);
        house.setAttribute("fill", houseColor);
        svg.appendChild(house);

        //the roof
        var roof = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        roof.setAttribute("points", "300,180 370,140 450,180");
        roof.setAttribute("fill", woodColor);
        svg.appendChild(roof);

        //the door
        var door = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        door.setAttribute("x", 350);
        door.setAttribute("y", 200);
        door.setAttribute("width", 20);
        door.setAttribute("height", 40);
        door.setAttribute("fill", woodColor);
        svg.appendChild(door);

        //the window
        var window = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        window.setAttribute("x", 400);
        window.setAttribute("y", 200);
        window.setAttribute("width", 20);
        window.setAttribute("height", 20);
        window.setAttribute("fill", windowColor);
        svg.appendChild(window);

        //windmill
        var ceX = 150;
        var ceY = 120;
        var length = 75;
        var endX1 = ceX + length * Math.cos(angle);
        var endY1 = ceY + length * Math.sin(angle);
        var endX2 = ceX + length * Math.cos(angle + Math.PI / 2);
        var endY2 = ceY + length * Math.sin(angle + Math.PI / 2);
        var endX3 = ceX + length * Math.cos(angle + Math.PI);
        var endY3 = ceY + length * Math.sin(angle + Math.PI);
        var endX4 = ceX + length * Math.cos(angle + 3 * Math.PI / 2);
        var endY4 = ceY + length * Math.sin(angle + 3 * Math.PI / 2);

        // Draw the rotating line
        var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line1.setAttribute("x1", ceX);
        line1.setAttribute("y1", ceY);
        line1.setAttribute("x2", endX1);
        line1.setAttribute("y2", endY1);
        line1.setAttribute("stroke", woodColor);
        line1.setAttribute("stroke-width", 5);
        svg.appendChild(line1);

        var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line2.setAttribute("x1", ceX);
        line2.setAttribute("y1", ceY);
        line2.setAttribute("x2", endX2);
        line2.setAttribute("y2", endY2);
        line2.setAttribute("stroke", woodColor);
        line2.setAttribute("stroke-width", 5);
        svg.appendChild(line2);

        var line3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line3.setAttribute("x1", ceX);
        line3.setAttribute("y1", ceY);
        line3.setAttribute("x2", endX3);
        line3.setAttribute("y2", endY3);
        line3.setAttribute("stroke", woodColor);
        line3.setAttribute("stroke-width", 5);
        svg.appendChild(line3);

        var line4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line4.setAttribute("x1", ceX);
        line4.setAttribute("y1", ceY);
        line4.setAttribute("x2", endX4);
        line4.setAttribute("y2", endY4);
        line4.setAttribute("stroke", woodColor);
        line4.setAttribute("stroke-width", 5);
        svg.appendChild(line4);

        var line5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line5.setAttribute("x1", 175);
        line5.setAttribute("y1", 300);
        line5.setAttribute("x2", ceX);
        line5.setAttribute("y2", ceY);
        line5.setAttribute("stroke", woodColor);
        line5.setAttribute("stroke-width", 5);
        svg.appendChild(line5);

        var line6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line6.setAttribute("x1", ceX);
        line6.setAttribute("y1", ceY);
        line6.setAttribute("x2", 125);
        line6.setAttribute("y2", 300);
        line6.setAttribute("stroke", woodColor);
        line6.setAttribute("stroke-width", 5);
        svg.appendChild(line6);

        angle += 0.01;

        requestAnimationFrame(updateSVG);
    }
    updateSVG();
}





createCanvas();
createSVG();