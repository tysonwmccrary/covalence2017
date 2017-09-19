// Input boxes
let inputSquareSide = <HTMLInputElement>document.getElementById('input-square-side');
let inputRectangleWidth = <HTMLInputElement>document.getElementById('input-rect-width');
let inputRectangleHeight = <HTMLInputElement>document.getElementById('input-rect-height');
let inputTriangleHeight = <HTMLInputElement>document.getElementById('input-tri-height');
let inputCircleRadius = <HTMLInputElement>document.getElementById('input-circ-radius');

// span labels
let shapeNameLabel = document.getElementById('shape-name');
let shapeWidthLabel = document.getElementById('shape-width');
let shapeHeightLabel = document.getElementById('shape-height');
let shapeRadiusLabel = document.getElementById('shape-radius');
let shapeAreaLabel = document.getElementById('shape-area');
let shapePerimeterLabel = document.getElementById('shape-perimeter');

let canvas = document.getElementById('canvas');

document.getElementById('circle-btn').addEventListener('click', createCircle);
document.getElementById('triangle-btn').addEventListener('click', createTriangle);
document.getElementById('rectangle-btn').addEventListener('click', createRectangle);
document.getElementById('square-btn').addEventListener('click', createSquare);

function createCircle() {
    let inputRadius = Number(inputCircleRadius.value);
    new Circle(inputRadius);
}
function createTriangle() {
    new Triangle(+inputTriangleHeight.value);
}
function createRectangle() {
    new Rectangle(Number(inputRectangleWidth.value), Number(inputRectangleHeight.value));
}
function createSquare() {
    new Square(Number(inputSquareSide.value));
}



abstract class Shape {
    protected div: HTMLDivElement;
    protected cssClass: string;
    protected radius: number;
    
    constructor(protected width: number, protected height: number) {

    }

    draw() {
        this.div = document.createElement('div');
        this.div.className = 'shape ' + this.cssClass; // TODO: What is this.cssClass
        // this.div.classList.add('shape');
        // this.div.classList.add(this.cssClass);

        let x = Math.floor(Math.random() * (600 - this.width));
        let y = Math.floor(Math.random() * (600 - this.height));

        this.div.style.top = y + 'px';
        this.div.style.left = x + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';

        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', function() {
            this.div.remove();
        }.bind(this));

        canvas.appendChild(this.div);
    }

    describe() {
        shapeNameLabel.innerText = this.constructor.name;
        shapeWidthLabel.innerText = String(this.width);
        shapeHeightLabel.innerText = String(this.height);
        shapeRadiusLabel.innerText = String(this.radius);
        shapeAreaLabel.innerText = this.area();
        shapePerimeterLabel.innerText = this.perimeter();
    }

    abstract area();
    abstract perimeter();
}

class Circle extends Shape {

    constructor(radius: number) {
        super(2 * radius, 2 * radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {

    constructor(height: number) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderRightWidth = height + 'px';
        this.div.style.borderBottomWidth = height + 'px';
    }

    area() {
        return 0.5 * this.height * this.height;
    }

    perimeter() {
        return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
    }
}

class Rectangle extends Shape {

    constructor(width: number, height: number) {
        super(width, height);
        this.cssClass = 'rectangle';
        this.draw();
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}

class Square extends Rectangle {
    
    constructor(side: number) {
        super(side, side);
        this.cssClass = 'square';
        this.div.classList.remove('rectangle');
        this.div.classList.add(this.cssClass);
    }
}