import { useRef, useEffect, useState } from 'react'
import './canvas.css'


const Canvas = props => {

    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var maxRadius = 40;
        // var minRadius = 2;

        var colorArray = [
            '#fc3468',
            '#8664fd',
            '#ffd700',
            '#3b2d9b',
            '#59f49a',
            
        ];

        var mouse = {
            x: undefined,
            y: undefined
        }
        const handleMouseMove = (event) => {
            mouse.x = event.clientX
            mouse.y = event.clientY
            console.log("x:" + mouse.x + "y:" + mouse.y)
        };

        window.addEventListener('mousemove', handleMouseMove);

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });



        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.minRadius = radius;
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

            this.draw = function () {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.strokeStyle = 'red';
                context.fillStyle = this.color;
                context.fill();
            }

            this.update = function () {
                if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;

                //interactivity
                if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                    if (this.radius < maxRadius) {
                        this.radius += 1;
                    }
                } else if (this.radius > this.minRadius) {
                    this.radius -= 1;
                }

                this.draw();

            }
        }
        var circleArray = [];

        function init() {
            //Circles
            circleArray = [];
            for (var i = 0; i < 1000; i++) {
                var radius = Math.random() * 5 + 1;
                var x = Math.random() * (window.innerWidth - radius * 2);
                var y = Math.random() * (window.innerHeight - radius * 2);
                var dx = (Math.random() - 0.5);
                var dy = (Math.random() - 0.5);
                circleArray.push(new Circle(x, y, dx, dy, radius));
            }
        }
        init();

        const animate = () => {
            requestAnimationFrame(animate);
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (var i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }
        animate();
    }, [])

    return <canvas ref={ref} {...props} />

}
export default Canvas