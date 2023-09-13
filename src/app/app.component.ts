import { Component } from '@angular/core';

import { IGood } from './good/good.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly goods: IGood[] = [
    {
      title: 'Морська глибина',
      image: 'sea_depth.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Ківі',
      image: 'kiwi.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Земля',
      image: 'earth.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Крит',
      image: 'crete.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Фіджі',
      image: 'fiji.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Тасманія',
      image: 'tasmania.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Коло',
      image: 'circle.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Овал',
      image: 'oval.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Сицилія',
      image: 'sicily.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Борнео',
      image: 'borneo.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Суматра',
      image: 'sumatra.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Тонга',
      image: 'tonga.jpg',
      price: 100,
      currency: 'USD',
    },

    {
      title: 'Гуам',
      image: 'guam.jpg',
      price: 100,
      currency: 'USD',
    },
  ];
}
