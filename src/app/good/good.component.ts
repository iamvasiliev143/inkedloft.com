import { Component, Input } from '@angular/core';

export interface IGood {
  title: string;
  image: string;
  price: number;
  currency: string;
}

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
})
export class GoodComponent {
  @Input()
  good!: IGood;
}
