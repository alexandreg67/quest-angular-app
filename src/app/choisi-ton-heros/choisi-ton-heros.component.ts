import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-hero';

@Component({
  selector: 'app-choisi-ton-heros',
  templateUrl: './choisi-ton-heros.component.html',
})
export class ChoisiTonHerosComponent {

  listeHeros: Hero[] = HEROS;

    ngOnInit(): void {
    this.selectHero(this.listeHeros[0])
    
  }

  selectHero(hero: Hero) {
    console.log(`Vous avez cliqué sur le héro : ${hero.name}`);
  }

}
