import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {EventService} from '../../../demo/service/eventservice';
import {ConfirmationService, MenuItem, MessageService} from 'primeng/api';
import {ProductService} from '../../../demo/service/productservice';
import {ClientService} from '../../../controller/service/client.service';
import {ProduitService} from '../../../controller/service/produit.service';
import {CommandeService} from '../../../controller/service/commande.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: any[];

  items: MenuItem[];
  events: any[];

  fullcalendarOptions: any;
  client: any;
  commande: any;
  commandes: any;
  produit: any;
  constructor(private eventService: EventService,
              private productService: ProductService ,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private serviceclient: ClientService,
              private serviceproduit: ProduitService,
              private servicecommande: CommandeService
  )
  {
  }
  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.client = this.serviceclient.findAll().subscribe(
        data => {
          this.client = data.length;
        }
    );
    this.commande = this.servicecommande.findAll().subscribe(
        data => {
          this.commande = data;
          this.commandes = data.length;
        }
    );
    this.produit = this.serviceproduit.findAll().subscribe(
        data => {
          this.produit = data.length;
        }
    );
    this.items = [
      { label: 'Save', icon: 'pi pi-check' },
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-trash' },
    ];

    this.eventService.getEvents().then(events => { this.events = events; });

    this.fullcalendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2021-07-09',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true
    };
  }


}
