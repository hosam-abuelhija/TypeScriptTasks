var hosam = {
    name: "hosam",
    age: 25,
    isAdult: function () {
        console.log("is ".concat(this.name, " an adult? : ").concat(this.age >= 18));
    },
};
hosam.isAdult();
var ali = {
    name: "ali",
    subject: ["math", "science"],
};
console.log("".concat(ali.name, " teaches ").concat(ali.subject.join(", ")));
var products = [
    {
        name: "product1",
        price: 100,
        quantity: 10,
        increasePrice: function () {
            if (this.quantity > 5) {
                this.price * 1.1;
            }
        },
    },
    {
        name: "product2",
        price: 200,
        quantity: 4,
        increasePrice: function () {
            if (this.quantity > 5) {
                this.price * 1.1;
            }
        },
    },
    {
        name: "product3",
        price: 300,
        quantity: 7,
        increasePrice: function () {
            if (this.quantity > 5) {
                this.price * 1.1;
            }
        },
    },
];
var dev = /** @class */ (function () {
    function dev() {
    }
    dev.prototype.start = function () {
        console.log("Device starting with default settings.");
    };
    return dev;
}());
var device1 = {
    start: function () {
        console.log("Device 1 is starting...");
    }
};
var device2 = new dev();
device1.start();
device2.start();
