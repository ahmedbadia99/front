import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClientService} from '../../../../controller/service/client.service';
import {Client} from '../../../../controller/model/client.model';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: ClientService) { }

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
    this.selected = new Client();
    this.submitted = false;
    this.createDialog = true;
  }
  public delete(selected: Client) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteById().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Client();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Client Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public edit(client: Client) {
    this.selected = {...client};
    this.editDialog = true;
  }
  public view(client: Client) {
    this.selected = {...client};
    this.viewDialog = true;
  }
  get selected(): Client {
    return this.service.selected;
  }

  set selected(value: Client) {
    this.service.selected = value;
  }

  get items(): Array<Client> {
    return this.service.items;
  }

  set items(value: Array<Client>) {
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

  get selectes(): Array<Client> {
    return this.service.selectes;
  }

  set selectes(value: Array<Client>) {
    this.service.selectes = value;
  }

}
