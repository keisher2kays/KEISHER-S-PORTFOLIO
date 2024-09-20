


// Set variables
const show = 75;
const canvas = document.getElementById("canvas");
const scene = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// Create dot
class Dot {
  constructor() {
    const angle = Math.floor(Math.random() * 360);

    this.size = 6;
    this.dx = Math.cos(angle) * 1;
    this.dy = Math.sin(angle) * 1;
    this.px = Math.random() * width;
    this.py = Math.random() * height;
  }

  // Update dot position and draw
  update() {
    this.bounds();

    this.px += this.dx;
    this.py += this.dy;

    this.draw();
  }

  // Draw the dots then connect them
  draw() {
    scene.beginPath();
    scene.arc(this.px, this.py, this.size, 0, Math.PI * 2);
    scene.closePath();
    scene.fillStyle = "#041680";
    scene.fill();

    this.connect();
  }

  // Connect the nearby dots
  connect() {
    const nearby = (width + height) * 0.1;

    dots.forEach(dot => {
      const distance = this.distance(dot);

      if (distance > nearby) return;

      const opacity = 1 - distance / nearby - 0.2;

      scene.beginPath();
      scene.lineWidth = 1;
      scene.strokeStyle = `rgba(168, 255, 214, ${opacity})`;
      scene.moveTo(this.px, this.py);
      scene.lineTo(dot.px, dot.py);
      scene.stroke();
    });
  }

  // Check if we've hit a wall and invert the direction
  bounds() {
    if (this.px < 0 || this.px > width) this.dx *= -1;

    if (this.py < 0 || this.py > height) this.dy *= -1;
  }

  // Calculate the distance between this dot and that dot
  // This calculates two 'sides' then the hypotenuse i.e. distance
  distance(dot) {
    const distX = this.px - dot.px;
    const distY = this.py - dot.py;

    return Math.sqrt(distX * distX + distY * distY);
  }
}

// Create dots
const dots = [...Array(show).fill().map(() => new Dot())];

// Draw scene
function draw() {
  scene.clearRect(0, 0, width, height);

  // Update all dots and redraw
  dots.forEach(particle => {
    particle.update();
  });

  requestAnimationFrame(draw);
}

draw();

// Resize canvas
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});


// document.querySelectorAll('.button1').forEach(a => {
//   a.addEventListener('click', function() {
//       const targetPage = this.getAttribute('href');
      
//       // Fade out the current page
//       document.body.style.opacity = '0';

//       // Wait for the transition to complete before navigating
//       setTimeout(() => {
//           window.location.href = targetPage;
//       }, 500); // Match this duration with the CSS transition duration
//   });
// });

// // Optional: Fade in effect when the page loads
// window.addEventListener('load', () => {
//   document.body.style.opacity = '1';
// });








// Background animation for about
// let canvasBg = document.getElementById('can');
// let ctxBg = canBg.getContext('2d');
// let wBg = canBg.width = window.innerWidth;
// let hBg = canBg.height = window.innerHeight;
// let hueBg = 235;
// let starsBg = [];
// let countBg = 0;
// let maxStarsBg = 1400;
// var canvas2 = document.createElement('can'),
//   ctx2 = canvas2.getContext('2d');
// canvas2.width = 100;
// canvas2.height = 100;
// var half = canvas2.width / 2,
//   gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
// gradient2.addColorStop(0.025, '#fff');
// gradient2.addColorStop(0.1, 'hsl(' + hueBg + ', 61%, 53%)');
// gradient2.addColorStop(0.25, 'hsl(' + hueBg + ', 64%, 6%)');
// gradient2.addColorStop(1, 'transparent');

// ctx2.fillStyle = gradient2;
// ctx2.beginPath();
// ctx2.arc(half, half, half, 0, Math.PI * 2);
// ctx2.fill();

// function randomBg(min, max) {
//   if (arguments.length < 2) {
//     max = min;
//     min = 0;
//   }

//   if (min > max) {
//     var hold = max;
//     max = min;
//     min = hold;
//   }

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function maxOrbitBg(x, y) {
//   var max = Math.max(x, y),
//     diameter = Math.round(Math.sqrt(max * max + max * max));
//   return diameter / 2;
// }

// var StarBg = function () {
//   this.orbitRadius = randomBg(maxOrbitBg(wBg, hBg));
//   this.radius = randomBg(60, this.orbitRadius) / 12;
//   this.orbitX = wBg / 2;
//   this.orbitY = hBg / 2;
//   this.timePassed = randomBg(0, maxStarsBg);
//   this.speed = randomBg(this.orbitRadius) / 60000;
//   this.alpha = randomBg(2, 10) / 10;

//   countBg++;
//   starsBg[countBg] = this;
// }

// StarBg.prototype.draw = function () {
//   var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
//     y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
//     twinkle = randomBg(10);

//   if (twinkle === 1 && this.alpha > 0) {
//     this.alpha -= 0.05;
//   } else if (twinkle === 2 && this.alpha < 1) {
//     this.alpha += 0.05;
//   }

//   ctxBg.globalAlpha = this.alpha;
//   ctxBg.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
//   this.timePassed += this.speed;
// }

// for (var i = 0; i < maxStarsBg; i++) {
//   new StarBg();
// }

// function animationBg() {
//   ctxBg.globalCompositeOperation = 'source-over';
//   ctxBg.globalAlpha = 0.8;
//   ctxBg.fillStyle = 'hsla(' + hueBg + ', 64%, 6%, 1)';
//   ctxBg.fillRect(0, 0, wBg, hBg)

//   ctxBg.globalCompositeOperation = 'lighter';
//   for (var i = 1, l = starsBg.length; i < l; i++) {
//     starsBg[i].draw();
//   };

//   window.requestAnimationFrame(animationBg);
// }

// animationBg();


// document.getElementById('downloadCV').addEventListener('click', function(e) {
//   e.preventDefault(); // Prevent the default anchor behavior
//   const url = this.getAttribute('href');
//   const filename = 'cv/cv.doc'; // Desired filename for the download
  
//   fetch(url)
//     .then(response => response.blob()) // Fetch the file and get it as a Blob
//     .then(blob => {
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
//       link.download = filename; // Set the desired filename
//       link.click(); // Trigger the download
//       URL.revokeObjectURL(link.href); // Clean up the object URL
//     })
//     .catch(error => console.error('Download failed:', error)); // Handle errors
// });
