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
      length: 100,
      width: 100,
      height: 250,
      wood: 'Ясень',
      covering: 'Масло Хуясло',
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
    },

    {
      title: 'Земля',
      image: 'earth.jpg',
      price: 10800,
      currency: 'UAH',
    },

    {
      title: 'Крит',
      image: 'crete.jpg',
      price: 5775,
      currency: 'UAH',
    },

    {
      title: 'Фіджі',
      image: 'fiji.jpg',
      price: 5775,
      currency: 'UAH',
    },

    {
      title: 'Тасманія',
      image: 'tasmania.jpg',
      price: 5775,
      currency: 'UAH',
    },

    {
      title: 'Коло',
      image: 'circle.jpg',
      price: 2800,
      currency: 'UAH',
    },

    {
      title: 'Овал',
      image: 'oval.jpg',
      price: 2900,
      currency: 'UAH',
    },

    {
      title: 'Сицилія',
      image: 'sicily.jpg',
      price: 2200,
      currency: 'UAH',
    },

    {
      title: 'Борнео',
      image: 'borneo.jpg',
      price: 2300,
      currency: 'UAH',
    },

    {
      title: 'Суматра',
      image: 'sumatra.jpg',
      price: 5700,
      currency: 'UAH',
    },

    {
      title: 'Тонга',
      image: 'tonga.jpg',
      price: 2000,
      currency: 'UAH',
    },

    {
      title: 'Гуам',
      image: 'guam.jpg',
      price: 2100,
      currency: 'UAH',
    },
  ];

  public kitchenTables = [];
}
