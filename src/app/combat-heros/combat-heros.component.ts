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
    let oppenentRandType = type[rand];

    let randOppenent: number = Math.floor(Math.random() * 2);
    let oppenentRand = this.oppenentListe[randOppenent]; 

    console.log("oppenentRandType ", oppenentRandType);
    
    
    this.oppenent = new Oppenent(oppenentRand.name, oppenentRand.power, oppenentRand.life, oppenentRand.attaqueSpeciale, oppenentRand.picture, oppenentRandType) 

  }

  goToHerosListe() {
    this.router.navigate(['/list-heros']);
  }

  goToFight(hero: Hero, opponent: Oppenent) {
    hero.attack(opponent);
    opponent.attack(hero);
    if (!hero.isAlive() && !opponent.isAlive()) {
        this.router.navigate(['app-vainqueur'])
        console.log("It's a Draw");

    }else if (!hero.isAlive()){
        this.router.navigate(['app-vainqueur'])
        console.log(`${opponent.name} wins`);
    }else if (!opponent.isAlive()) {
        this.router.navigate(['app-vainqueur'])
        console.log(`${hero.name} wins`);
    }    
  }
}
