import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS } from '../mock-hero';
import { Hero } from '../hero';

@Component({
  selector: 'app-combat-heros',
  templateUrl: './combat-heros.component.html',
})
export class CombatHerosComponent implements OnInit{

  herosListe : Hero[];
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
      this.herosListe = HEROS;
      const heroId: string | null = this.route.snapshot.paramMap.get('id');
      if (heroId) {
        this.hero = this.herosListe.find(hero => hero.id == +heroId)
      } 
  }

  goToHerosListe() {
    this.router.navigate(['/list-heros']);
  }
}
