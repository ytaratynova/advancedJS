"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

class Albom {
  constructor(title, artist, year) {
    this.title = title
    this.artist = artist
    this.year = year
  }
}

const albomFirst = new Albom('Help', 'Beatles', 1965)
const albomSecond = new Albom('The Beatles', 'Beatles', 1969)
const albomThird = new Albom('Let It Be', 'Beatles', 1970)

const alboms = [albomFirst, albomSecond, albomThird]

const musicCollection = {
  alboms,
  *[Symbol.iterator]() {
    for (const albom of this.alboms) {
      yield albom
    }
  }
}

for (const albom of musicCollection) {
  console.log(`${albom.title} - ${albom.artist} (${albom.year}}`);
}



