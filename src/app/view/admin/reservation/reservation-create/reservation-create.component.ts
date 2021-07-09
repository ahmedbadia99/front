import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {ReservationService} from '../../../../controller/service/reservation.service';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.scss']
})
export class ReservationCreateComponent implements OnInit {

  constructor( private service: ReservationService) { }
  public hideCreateDialog() {
    this.createDialog = false ;
  }
  ngOnInit(): void {
  }
  get selected(): string {
    return this.service.selected;
  }

  set selected(value: string) {
    this.service.selected = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

}
