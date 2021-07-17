import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProduitService} from '../../../../controller/service/produit.service';
import {Produit} from '../../../../controller/model/produit.model';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.scss']
})
export class ProduitEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ProduitService) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    if (this.selected.id) {
      this.items[this.service.findIndexById(this.selected.id)] = this.selected;
      this.service.edit().subscribe(data => {
        this.selected = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Produit Updated',
          life: 3000
        });
      });
    }
    this.editDialog = false;
    this.selected = new Produit();
  }


  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Produit {
    return this.service.selected;
  }

  set selected(value: Produit) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<Produit> {
    return this.service.items;
  }

  set items(value: Array<Produit>) {
    this.service.items = value;
  }

}
