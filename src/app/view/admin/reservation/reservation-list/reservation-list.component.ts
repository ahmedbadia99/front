import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {formatDate} from '@angular/common';
import {ReservationService} from '../../../../controller/service/reservation.service';
import {Etablissement} from "../../../../controller/model/etablissement.model";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
  styles: [`
        .box {
            background-color: var(--surface-e);
            text-align: center;
            padding: 1.25rem;
            font-size: 1.5rem;
            border-radius: 4px;
            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
        }

        .box-stretched {
            height: 100%;
        }

        .vertical-container {
            margin: 0;
            height: 200px;
            background: var(--surface-d);
            border-radius: 4px;
        }

        .nested-grid .p-col-4 {
            padding-bottom: 1rem;
        }
    `],
  animations: [
    trigger('animation', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({transform: 'translateX(50%)', opacity: 0}),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        animate(('250ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)'
        }))
      ])
    ])
  ]
})
export class ReservationListComponent implements OnInit {

  constructor(private service: ReservationService) { }
  Hours: number[];
  date: string;
  day: string;
  newday: number[] = [] ;
  string: string ;

  ngOnInit() {
    this.date = formatDate(new Date(), 'yyyy/MM', 'en');
    this.day = formatDate(new Date(), 'dd', 'en');
    this.number();
    this.Hours = [8, 9, 10, 11, 12, 13, 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 ];
    this.string = this.date + '/' ;
  }
  number() {
    for (let i = 0; i < 7; i++)
    {
      this.newday.push(+this.day + i);
    }
  }
  public create(datee: string) {
    this.selected = datee;
    this.createDialog = true;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
  get selected(): string {
    return this.service.selected;
  }

  set selected(value: string) {
    this.service.selected = value;
  }

}
