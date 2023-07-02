import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROSPARAM } from '../mock-hero';
import { Hero } from '../hero';
import { Oppenent } from '../oppenent';
import { OPPENENTS } from '../mock-oppenent';

@Component({
  selector: 'app-combat-heros',
  templateUrl: './combat-heros.component.html',
  styleUrls: ['./style.css']
})
export class CombatHerosComponent implements OnInit{

  herosListe: any;
  heroParam: any;
  hero: Hero;
  oppenentListe : Oppenent[];
  oppenent: Oppenent;
  oppenentType: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.herosListe = HEROSPARAM;
    this.oppenentListe = OPPENENTS;

    const heroId: string | null = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroParam = this.herosListe.find((hero: { id: number; }) => hero.id == +heroId);
      this.hero = new Hero(this.heroParam.name, this.heroParam.power, this.heroParam.life, this.heroParam.attaqueSpeciale, this.heroParam.picture, this.heroParam.type);

    } 


    let rand: number = Math.floor(Math.random() * 3);
    let type: string[] = ["feu", "eau", "plante"];
    this.oppenentType = type[rand];

    let randOppenent: number = Math.floor(Math.random() * 2);
    this.oppenent = this.oppenentListe[randOppenent];    

  }

  goToHerosListe() {
    this.router.navigate(['/list-heros']);
  }

  goToFight() {
    this.hero.attack(this.oppenent);
    this.oppenent.attack(this.hero);
    if (!this.hero.isAlive() && !this.oppenent.isAlive()) {
        console.log("It's a Draw");

    }else if (!this.hero.isAlive()){
        console.log(`${this.oppenent.name} wins`);
    }else if (!this.oppenent.isAlive()) {
        console.log(`${this.hero.name} wins`);
    }    
  }


}
