import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROS } from '../mock-hero';
import { Hero } from '../hero';
import { Oppenent } from '../oppenent';
import { OPPENENTS } from '../mock-oppenent';

@Component({
  selector: 'app-combat-heros',
  templateUrl: './combat-heros.component.html',
  styleUrls: ['./style.css']
})
export class CombatHerosComponent implements OnInit{

  herosListe : Hero[];
  hero: Hero | undefined;
  oppenentListe : Oppenent[];
  oppenent: Oppenent | undefined;
  oppenentType: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.herosListe = HEROS;
    this.oppenentListe = OPPENENTS;

    const heroId: string | null = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.hero = this.herosListe.find(hero => hero.id == +heroId)
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

  // goToFight() {
  //   this.hero.attack(hero2);
  //   hero2.attack(hero1);
  //   if (!hero1.isAlive() && !hero2.isAlive()) {
  //       console.log("It's a Draw");
  //       gameOver = true;

  //   }else if (!hero1.isAlive()){
  //       console.log(`${hero2.getName()} wins`);
  //       gameOver = true;
  //   }else if (!hero2.isAlive()) {
  //       console.log(`${hero1.getName()} wins`);
  //       gameOver = true;
  //   }    
  // }


}
