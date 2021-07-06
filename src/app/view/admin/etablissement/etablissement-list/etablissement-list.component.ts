import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EtablissementService} from '../../../../controller/service/Etablissement.service';
import {Etablissement} from '../../../../controller/model/Etablissement.model';
@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.scss']
})
export class EtablissementListComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: EtablissementService) { }

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
    this.selected = new Etablissement();
    this.submitted = false;
    this.createDialog = true;
  }
  public delete(selected: Etablissement) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteById().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Etablissement();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Etablissement Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public edit(etablissement: Etablissement) {
    this.selected = {...etablissement};
    this.editDialog = true;
  }
  public view(etablissement: Etablissement) {
    this.selected = {...etablissement};
    this.viewDialog = true;
  }
  get selected(): Etablissement {
    return this.service.selected;
  }

  set selected(value: Etablissement) {
    this.service.selected = value;
  }

  get items(): Array<Etablissement> {
    return this.service.items;
  }

  set items(value: Array<Etablissement>) {
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

  get selectes(): Array<Etablissement> {
    return this.service.selectes;
  }

  set selectes(value: Array<Etablissement>) {
    this.service.selectes = value;
  }

}
