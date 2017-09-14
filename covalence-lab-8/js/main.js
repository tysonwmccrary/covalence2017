//Input Boxes.
var inputSquareSide = document.getElementById('input-square-side');
var inputRectangleWidth = document.getElementById('input-rect-width');
var inputRectangleHeight = document.getElementById('input-rect-height');
var inputTriangle = document.getElementById('input-tri-height');
var inputCircleRadius = document.getElementById('input-circle-radius');

//Span Lables
var shapeNameLable = document.getElementById('shape-name');
var shapeWidthLabel = document.getElementById('shape-width');
var shapeHeightLabel = document.getElementById('shape-height');
var shapeRadiusLabel = document.getElementById('shape-radius');
var shapeAreaLabel = document.getElementById('shape-area');
var shapePerimeterLabel = document.getElementById('shape-perimeter');

var canvas = document.getElementById('canvas');

document.getElementById('circle-btn').addEventListener('click', createCircle);

function createCircle() {
    var inputRadius = inputCircleRadius.value;
    new Circle(inputRadius);
}

function Shape(width, height) {
    this.width = width;
    this.height = height;
}
Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape' + this.ccsClass;

    var x = Math.floor(Math.random() * (600 - this.width));
    var y = Math.floor(Math.random() * (600 - this.height));

    this.div.style.top = y + 'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';

    this.div.addEventListner('click', this.describe.bind(this));
    this.div.addEventListner('dblclick', function() {
        this.div.remove();
    }.bind(this));

    canvas.appendChild(this.div);
}

Shape.prototype.describe = function() {
    shapeNameLable.innerText = this.constructor.name;
    shapeWidthLabel.innerText = this.width;
    shapeHeightLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.radius;
    shapeAreaLabel.innerText = this.area();
    shapePerimeterLabel.innerText = this.perimeter();
}

function Circle(radius) {
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle';
    this.draw();
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2)
}
Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius;
}