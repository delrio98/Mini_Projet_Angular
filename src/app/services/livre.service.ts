import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model'
@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres : Livre[];

  livre : Livre;
  constructor() {
    this.livres = [
      {idLivre: 1, nomLivre : "The Lord of the Rings", prixLivre : 25.29, dateCreation : new Date("07/29/1954")},
      {idLivre: 2, nomLivre : "Harry Potter", prixLivre : 45.79, dateCreation : new Date("07/26/1997")},
      {idLivre: 3, nomLivre : "A Game of Thrones", prixLivre : 29.49, dateCreation : new Date("08/01/1996")},
      {idLivre: 4, nomLivre : "To Kill A Mockingbird", prixLivre : 15.99, dateCreation : new Date("07/11/1960")}
    ];
   }
   listelivres():Livre[]{
     return this.livres;
   }
   ajouterLivres(prod:Livre){
     this.livres.push(prod);
   }
   SupprimerLivre(l: Livre){
    const index = this.livres.indexOf(l, 0);
    if(index > -1){
      this.livres.splice(index, 1);
    }
  }
  consulterLivre (id:number): Livre {
    this.livre = this.livres.find(p => p.idLivre == id);
    return this.livre;
  }
  trierLivres(){
    this.livres = this.livres.sort((n1,n2)=> {
      if(n1.idLivre > n2.idLivre){
        return 1;
      }
      if(n1.idLivre < n2.idLivre){
        return -1 ;
      }
      return 0;
    })
  }
  updateLivre(l: Livre){
    this.SupprimerLivre(l);
    this.ajouterLivres(l);
    this.trierLivres();
  }
}
