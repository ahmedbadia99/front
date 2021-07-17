import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = 'http://localhost:8036/EMI/produit/';
  // tslint:disable-next-line:variable-name
  private _items: Array<Produit>;
  // tslint:disable-next-line:variable-name
  private _selected: Produit;
  // tslint:disable-next-line:variable-name
  private _selectes: Array<Produit>;

  // tslint:disable-next-line:variable-name
  private _createDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _editDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _viewDialog: boolean;
  // tslint:disable-next-line:variable-name
  private _submitted: boolean;
  constructor(private http: HttpClient) { }


  get items(): Array<Produit> {
    return this._items;
  }

  set items(value: Array<Produit>) {
    this._items = value;
  }

  get selected(): Produit {
    return this._selected;
  }

  set selected(value: Produit) {
    this._selected = value;
  }

  get selectes(): Array<Produit> {
    return this._selectes;
  }

  set selectes(value: Array<Produit>) {
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

  public findAll(): Observable<Array<Produit>> {
    return this.http.get<Array<Produit>>(this.url);
  }
  public save(): Observable<Produit> {
    this.selected.id = 0;
    this.selected.image = 'AA';
    return this.http.post<Produit>(this.url + 'save/', this.selected);
  }

  public edit(): Observable<Produit> {
    return this.http.put<Produit>(this.url + 'update/', this.selected);
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
