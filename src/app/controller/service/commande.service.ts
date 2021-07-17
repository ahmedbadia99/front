import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Commande} from '../model/commande.model';
import {environment} from '../../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommandeService {

    private url = environment.baseUrl + 'commande/';
    // tslint:disable-next-line:variable-name

    // tslint:disable-next-line:variable-name
    private _items: Array<Commande>;
    // tslint:disable-next-line:variable-name
    private _selected: Commande;
    // tslint:disable-next-line:variable-name
    private _selectes: Array<Commande>;

    // tslint:disable-next-line:variable-name
    private _createDialog: boolean;
    // tslint:disable-next-line:variable-name
    private _editDialog: boolean;
    // tslint:disable-next-line:variable-name
    private _viewDialog: boolean;
    // tslint:disable-next-line:variable-name
    private _submitted: boolean;


    // constructor(private messageService: MessageService,
    //             private confirmationService: ConfirmationService, private http: HttpClient) {
    // }
    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<Commande>> {
        return this.http.get<Array<Commande>>(this.url);
    }

    public save(): Observable<Commande> {
        return this.http.post<Commande>(this.url, this.selected);
    }

    /*public edit(): Observable<Commande> {
        return this.http.put<Commande>(this.url, this.selected);
    }
*/
    public deleteByIndex(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }
    /*
        public deleteMultipleByReference(): Observable<number> {
            return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selectes);
        }*/

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

    public deleteMultipleIndexById() {
        for (const item of this.selectes){
            this.deleteIndexById(item.id);
        }
    }

    get items(): Array<Commande> {
        return this._items;
    }

    set items(value: Array<Commande>) {
        this._items = value;
    }

    get selected(): Commande {
        return this._selected;
    }

    set selected(value: Commande) {
        this._selected = value;
    }

    get selectes(): Array<Commande> {
        return this._selectes;
    }

    set selectes(value: Array<Commande>) {
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

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }
}
