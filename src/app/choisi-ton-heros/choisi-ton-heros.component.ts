import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choisi-ton-heros',
  templateUrl: './choisi-ton-heros.component.html',
})
export class ChoisiTonHerosComponent {

  listeHeros: Hero[] = HEROS;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  goToCombatHeroes(hero: Hero) {
    this.router.navigate(['/combat', hero.id])
  }

}
