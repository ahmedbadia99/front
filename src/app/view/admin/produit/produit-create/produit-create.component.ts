import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProduitService} from '../../../../controller/service/Produit.service';
import {Produit} from '../../../../controller/model/Produit.model';

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.scss']
})
export class ProduitCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ProduitService) { }

  ngOnInit(): void {
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    this.service.save().subscribe(data => {
      this.items.push({...data});
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Produit Created',
        life: 3000
      });
    });
    this.createDialog = false;
    this.selected = new Produit();

  }
  get selected(): Produit {
    return this.service.selected;
  }

  set selected(value: Produit) {
    this.service.selected = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
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
