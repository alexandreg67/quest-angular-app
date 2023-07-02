import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROSPARAM } from '../mock-hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choisi-ton-heros',
  templateUrl: './choisi-ton-heros.component.html',
})
export class ChoisiTonHerosComponent {

  listeHeros = HEROSPARAM;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  }

  goToCombatHeroes(hero : any) {
    this.router.navigate(['/combat', hero.id])
  }

}
