import {Produit} from './produit.model';
import {Client} from './client.model';

export class Commande {
    public id: number;
    public ref: string;
    public dateCommande: Date;
    public etatCommande: string;
    public produit: Produit;
    public client: Client;
}
