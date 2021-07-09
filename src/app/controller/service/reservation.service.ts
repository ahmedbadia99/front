import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  // tslint:disable-next-line:variable-name
  private _createDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _selected: string;
  constructor() { }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get selected(): string {
    return this._selected;
  }

  set selected(value: string) {
    this._selected = value;
  }
}
