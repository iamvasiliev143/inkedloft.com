import { Component, Injectable, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { GoodModalComponent } from '../good-modal/good-modal.component';

export interface IGood {
  title: string;
  image: string;
  price: number;
  currency: string;
  [index: string]: any;
}

@Injectable()
export class LocalCurrencyPipe {
  constructor(protected readonly currencyPipe: CurrencyPipe) {}

  public transformCurrency(
    amount: number | string,
    currency: string,
    roundToInteger = false
  ): string {
    if (!amount) {
      amount = 0;
    }

    if (currency === 'UAH') {
      currency = '₴';
    }

    return <string>(
      this.currencyPipe.transform(
        amount,
        currency,
        'symbol',
        roundToInteger ? '1.0-0' : '1.2-2'
      )
    );
  }
}

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
})
export class GoodComponent {
  @Input()
  good!: IGood;

  constructor(
    public readonly localCurrencyPipe: LocalCurrencyPipe,
    public dialog: MatDialog
  ) {}

  openModal(good: IGood) {
    const dialogRef = this.dialog.open(GoodModalComponent, {
      data: good,
    });
  }
}
