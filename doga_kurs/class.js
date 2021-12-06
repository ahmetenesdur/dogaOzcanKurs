class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }


get area() {
    return this.calcArea();
}

calcArea() {
    return this.height * this.width;
}

}

const square = new Rectangle(10,10);
const square2 = new Rectangle(20,20);

console.log(square.area);
console.log(square2.area);