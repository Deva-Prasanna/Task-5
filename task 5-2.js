// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// sample to check the program:

const circle = new Circle();
console.log(circle.toString()); // Circle - Radius: 1, Color: red
console.log("Area:", circle.getArea()); // Area: 3.141592653589793
console.log("Circumference:", circle.getCircumference()); // Circumference: 6.283185307179586

