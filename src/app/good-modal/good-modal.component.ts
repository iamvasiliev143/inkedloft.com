import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IGood, LocalCurrencyPipe } from '../good/good.component';

class DialogData {}

@Component({
  selector: 'app-good-modal',
  templateUrl: './good-modal.component.html',
  styleUrls: ['./good-modal.component.scss'],
})
export class GoodModalComponent {
  good!: IGood;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData,

    public readonly localCurrencyPipe: LocalCurrencyPipe
  ) {
    this.good = data as IGood;
  }
}
