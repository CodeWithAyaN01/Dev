console.log("Js loaded");

class cars {

    cars(brand) {
        console.log("A Constructor Was created");
        this.brand = brand;
    }
    start() {
        console.log("This is a Start Function");
    }
    stop() {
        console.log("This is a Stop Function");
    }
}
let fortuner = new cars("Toyota");


