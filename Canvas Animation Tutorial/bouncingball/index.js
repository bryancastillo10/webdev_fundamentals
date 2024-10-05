const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// const radius = 30;


class Circle {
    constructor(x, y, dx , dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = '#3d5a6c';
            c.fill();
        };

        this.update = function() {
            if(this.x + radius > innerWidth || this.x - radius < 0){
                this.dx = -this.dx;
            }
        
            if(this.y + radius > innerHeight || this.y - radius < 0){
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }
}


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// const radius = 30;

let circleArray = [];

for ( let i = 0; i < 30; i++){
    const radius = 30;
    let x = Math.random() * (innerWidth - radius*2) + radius;
    let y = Math.random() * (innerHeight - radius*2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius))

};

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
};

animate();