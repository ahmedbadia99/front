import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProduitService} from '../../../../controller/service/produit.service';
import {Produit} from '../../../../controller/model/produit.model';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.scss']
})
export class ProduitViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ProduitService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Produit {
    return this.service.selected;
  }

  set selected(value: Produit) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
