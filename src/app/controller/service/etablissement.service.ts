import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Etablissement} from '../model/Etablissement.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private url = 'http://localhost:8036/gecd/Etablissement/';
  // tslint:disable-next-line:variable-name
  private _items: Array<Etablissement>;
  // tslint:disable-next-line:variable-name
  private _selected: Etablissement;
  // tslint:disable-next-line:variable-name
  private _selectes: Array<Etablissement>;

  // tslint:disable-next-line:variable-name
  private _createDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _editDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _viewDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _submitted: boolean;
  constructor(private http: HttpClient) { }


  get items(): Array<Etablissement> {
    return this._items;
  }

  set items(value: Array<Etablissement>) {
    this._items = value;
  }

  get selected(): Etablissement {
    return this._selected;
  }

  set selected(value: Etablissement) {
    this._selected = value;
  }

  get selectes(): Array<Etablissement> {
    return this._selectes;
  }

  set selectes(value: Array<Etablissement>) {
    this._selectes = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public findAll(): Observable<Array<Etablissement>> {
    return this.http.get<Array<Etablissement>>(this.url);
  }
  public save(): Observable<Etablissement> {
    this.selected.id = 0;
    return this.http.post<Etablissement>(this.url + 'save/', this.selected);
  }

  public edit(): Observable<Etablissement> {
    return this.http.put<Etablissement>(this.url + 'update/', this.selected);
  }

  public deleteById(): Observable<number> {
    return this.http.delete<number>(this.url + 'id/' + this.selected.id);
  }
  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }
}
