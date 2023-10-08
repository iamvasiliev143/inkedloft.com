import { Component } from '@angular/core';

import { IGood } from './good/good.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly coffeeTables: IGood[] = [
    {
      title: 'Морська глибина',
      image: 'sea_depth.jpg',
      price: 6950,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 59,
      width: 49,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    {
      title: 'Ківі',
      image: 'kiwi.jpg',
      price: 7200,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 55,
      width: 39,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    {
      title: 'Земля',
      image: 'earth.jpg',
      price: 10800,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 52.5,
      width: 52.5,
      height: 50,
      wood: 'Ясен',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Крит',
      image: 'crete.jpg',
      price: 5775,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 85,
      width: 60,
      height: 50,
      wood: 'Канадський каповий клен',
      covering: 'Масло + віск',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Фіджі',
      image: 'fiji.jpg',
      price: 5775,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 85,
      width: 60,
      height: 50,
      wood: 'Канадський каповий клен',
      covering: 'Масло + віск',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,


    },

    {
      title: 'Тасманія',
      image: 'tasmania.jpg',
      price: 5775,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 85,
      width: 60,
      height: 50,
      wood: 'Канадський каповий клен',
      covering: 'Масло + віск',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Коло',
      image: 'circle.jpg',
      price: 2800,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 50,
      width: 50,
      height: 50,
      wood: 'Дуб + епоксидна смола',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Овал',
      image: 'oval.jpg',
      price: 2900,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 60,
      width: 40,
      height: 50,
      wood: 'Дуб',
      covering: 'Дуб',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Сицилія',
      image: 'sicily.jpg',
      price: 2200,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 43,
      width: 34,
      height: 55,
      wood: 'Ясен',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Борнео',
      image: 'borneo.jpg',
      price: 2300,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 40,
      width: 30,
      height: 55,
      wood: 'Дуб',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,

    },

    {
      title: 'Суматра',
      image: 'sumatra.jpg',
      price: 5700,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 39.5,
      width: 29.5,
      height: 55,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Тонга',
      image: 'tonga.jpg',
      price: 2000,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 60,
      width: 45,
      height: 50,
      wood: 'Ясен',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },

    {
      title: 'Гуам',
      image: 'guam.jpg',
      price: 2100,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 60,
      width: 45,
      height: 50,
      wood: 'Ясен + епоксидна смола',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
    },
  ];

  public kitchenTables = [
    {
      title: 'Стіл амбарний',
      image: 'sea_depth.jpg',
      price: 6950,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 59,
      width: 49,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    {
      title: 'Столи з ясеню',
      image: 'sea_depth.jpg',
      price: 6950,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 59,
      width: 49,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    {
      title: 'Столи Industrial',
      image: 'sea_depth.jpg',
      price: 6950,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 59,
      width: 49,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    {
      title: 'Столи з дубу',
      image: 'sea_depth.jpg',
      price: 6950,
      currency: 'UAH',

      colors: [
        {
          title: 'Горіх',
        },
        {
          title: 'Ясен',
        },
      ],
      length: 59,
      width: 49,
      height: 50,
      wood: 'Горіх',
      covering: 'Лак',
      guarantee: '2 роки',
      originalDesign: true,
      freeDelivery: true,
      ownProduction: true,
    },

    ];
}
