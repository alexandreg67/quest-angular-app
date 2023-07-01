import { Component, OnInit } from '@angular/core';
import { HEROS } from './mock-hero';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  listeHeros: Hero[] = HEROS;


  ngOnInit(): void {
    console.log((this.listeHeros));
    this.selectHero(this.listeHeros[0])
    
  }

  selectHero(hero: Hero) {
    console.log(`Vous avez cliqué sur le héro : ${hero.name}`);
  }
 
}
