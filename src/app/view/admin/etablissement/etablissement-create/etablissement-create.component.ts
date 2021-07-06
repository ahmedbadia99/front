import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtablissementService} from '../../../../controller/service/Etablissement.service';
import {Etablissement} from '../../../../controller/model/Etablissement.model';

@Component({
  selector: 'app-etablissement-create',
  templateUrl: './etablissement-create.component.html',
  styleUrls: ['./etablissement-create.component.scss']
})
export class EtablissementCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtablissementService) { }

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
          detail: 'Etablissement Created',
          life: 3000
        });
      });
    this.createDialog = false;
    this.selected = new Etablissement();

  }
  get selected(): Etablissement {
    return this.service.selected;
  }

  set selected(value: Etablissement) {
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

  get items(): Array<Etablissement> {
    return this.service.items;
  }

  set items(value: Array<Etablissement>) {
    this.service.items = value;
  }

}
