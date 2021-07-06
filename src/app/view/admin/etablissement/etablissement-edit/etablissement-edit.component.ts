import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtablissementService} from '../../../../controller/service/Etablissement.service';
import {Etablissement} from '../../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissement-edit',
  templateUrl: './etablissement-edit.component.html',
  styleUrls: ['./etablissement-edit.component.scss']
})
export class EtablissementEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtablissementService) { }

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
            detail: 'Etablissement Updated',
            life: 3000
          });
        });
      }
    this.editDialog = false;
    this.selected = new Etablissement();
    }


  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Etablissement {
    return this.service.selected;
  }

  set selected(value: Etablissement) {
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

  get items(): Array<Etablissement> {
    return this.service.items;
  }

  set items(value: Array<Etablissement>) {
    this.service.items = value;
  }

}
