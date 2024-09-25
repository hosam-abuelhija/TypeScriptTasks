interface Person {
  name: string;
  age: number;
  isAdult(): void;
}

let hosam: Person = {
  name: "hosam",
  age: 25,
  isAdult(): void {
    console.log(`is ${this.name} an adult? : ${this.age >= 18}`);
  },
};
hosam.isAdult();

interface Teacher {
  name: string;
  subject: string[];
}

let ali: Teacher = {
  name: "ali",
  subject: ["math", "science"],
};

console.log(`${ali.name} teaches ${ali.subject.join(", ")}`);

interface Product {
  name: string;
  price: number;
  quantity: number;
  increasePrice(): void;
}

let products: Product[] = [
  {
    name: "product1",
    price: 100,
    quantity: 10,
    increasePrice(): void {
      if (this.quantity > 5) {
        this.price * 1.1;
      }
    },
  },
  {
    name: "product2",
    price: 200,
    quantity: 4,
    increasePrice(): void {
      if (this.quantity > 5) {
        this.price * 1.1;
      }
    },
  },
  {
    name: "product3",
    price: 300,
    quantity: 7,
    increasePrice(): void {
      if (this.quantity > 5) {
        this.price * 1.1;
      }
    },
  },
];



interface Device{
    start(): void;
}

class dev implements Device{
    start(): void {
        console.log("Device starting with default settings.");
    }
}

let device1: Device ={
    start(): void {
        console.log("Device 1 is starting...");
    }
}

let device2: Device = new dev();

device1.start();
device2.start();