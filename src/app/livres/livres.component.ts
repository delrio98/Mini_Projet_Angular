import { Component, OnInit } from '@angular/core';
import { Livre } from "../model/livre.model";
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres : Livre[] ;
  constructor(private livreService : LivreService) {
    this.livres = livreService.listelivres();
  }

  ngOnInit(): void {
  }
  SupprimerLivre(l: Livre){
    let conf = confirm("Etes-vous sûr ?");
    if(conf)
    this.livreService.SupprimerLivre(l);
  }
}
