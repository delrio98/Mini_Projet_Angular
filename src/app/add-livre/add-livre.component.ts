import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router }from'@angular/router';
import { Livre } from '../model/livre.model';
import {LivreService} from '../services/livre.service';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  newbook = new Livre();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService) { }

  ngOnInit(): void {
  }
  addLivre(){
   console.log(this.newbook);
  this.livreService.ajouterLivres(this.newbook);
  this.router.navigate(['livres']);
  }
}
