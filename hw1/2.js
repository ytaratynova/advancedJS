"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getname() {
    return `Клиент ${this.firstname} ${this.lastname} заказал:`
  }
}


// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    this.chefs = new Map();
    this.menu = new Map([
      ['Пицца', new Set(['Маргарита', 'Пепперони', 'Три сыра'])],
      ['Суши', new Set(['Филадельфия', 'Калифорния', 'Чизмаки', 'Сеякемаки'])],
      ['Десерт', new Set(['Тирамису', 'Чизкейк'])],
    ]);
  }

  hireChef(name, specialization) {
    this.chefs.set(name, specialization);
  }

  newOrder(client, ...orders) {
    console.log(client.getname())
    for (const order of orders) {
      const { name, quantity, type } = order;
      let chefAssigned = false;
      [...this.chefs].forEach(([chef, specialization]) => {

        if (specialization === type & (Array.from(this.menu.values())[0].has(name) || Array.from(this.menu.values())[1].has(name) || Array.from(this.menu.values())[2].has(name))) {
          console.log(`${type} "${name}" - ${quantity}; готовит повар ${chef}`);
          chefAssigned = true;
        }
      });

      if (!chefAssigned) {
        console.log(`Блюда ${type} "${name}" нет в меню.`);
      }
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.

const manager = new Manager();
manager.hireChef("Олег", "Пицца");
manager.hireChef("Андрей", "Суши");
manager.hireChef("Анна", "Десерт");



// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);

// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);


// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.