import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProduitService} from '../../../../controller/service/Produit.service';
import {Produit} from '../../../../controller/model/Produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ProduitService) { }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }
  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'code', header: 'Code'},
      {field: 'adresse', header: 'Adresse'},
      {field: 'tel', header: 'Telephone'},
      {field: 'superficie', header: 'Superficie'},
      {field: 'nbrTerrain', header: 'Nombre Terrain'},
      {field: 'state', header: 'State'}
    ];
  }
  public openCreate() {
    this.selected = new Produit();
    this.submitted = false;
    this.createDialog = true;
  }
  public delete(selected: Produit) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteById().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Produit();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Produit Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public edit(produit: Produit) {
    this.selected = {...produit};
    this.editDialog = true;
  }
  public view(produit: Produit) {
    this.selected = {...produit};
    this.viewDialog = true;
  }
  get selected(): Produit {
    return this.service.selected;
  }

  set selected(value: Produit) {
    this.service.selected = value;
  }

  get items(): Array<Produit> {
    return this.service.items;
  }

  set items(value: Array<Produit>) {
    this.service.items = value;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<Produit> {
    return this.service.selectes;
  }

  set selectes(value: Array<Produit>) {
    this.service.selectes = value;
  }

}
