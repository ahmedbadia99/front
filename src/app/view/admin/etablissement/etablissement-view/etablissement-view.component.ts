import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EtablissementService} from '../../../../controller/service/Etablissement.service';
import {Etablissement} from "../../../../controller/model/Etablissement.model";

@Component({
  selector: 'app-etablissement-view',
  templateUrl: './etablissement-view.component.html',
  styleUrls: ['./etablissement-view.component.scss']
})
export class EtablissementViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EtablissementService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Etablissement {
    return this.service.selected;
  }

  set selected(value: Etablissement) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
