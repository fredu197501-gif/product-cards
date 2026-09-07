// Дз №12 2) Все файлы импортируем в main.js.
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import { Modal } from "./modal.js";
import { Form } from "./form.js";
// 3) Создаем структуру и наследуемость класса.
class Car {
  constructor(brand, model, year, transmission, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.color = color;
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model} ${this.transmission} ${this.color}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, model, year, transmission, color, batteryCapacity) {
    super(brand, model, year, transmission, color);
    this.batteryCapacity = batteryCapacity;
  }
  getInfo() {
    return `${super.getInfo()} ${this.batteryCapacity} kWh`;
  }
}


const Toyota = new Car("Toyota", "Camry", 2020, "Automatic", "Black");
const Honda = new Car("Honda", "Civic", 2019, "Manual", "White");
const Tesla = new ElectricCar("Tesla", "Model 3", 2021, "Automatic", "Red", 75);
console.log(Toyota.getInfo());
console.log(Honda.getInfo());
console.log(Tesla.getInfo());

// 4)создаеи класс для модального окна под названием Modal.
document.addEventListener("DOMContentLoaded", () => {
  const modalWindow = new Modal('registrationModal');
  const openBtn = document.getElementById('openBtn');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      console.log('Открываем модальное окно');
      modalWindow.open();
    });
  }


  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalWindow.close());
  }
})
