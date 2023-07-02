import { Hero } from "./hero";

export class Oppenent {
  id: number;
  life: number;
  power: number;
  attaqueSpeciale: number;
  name: string;
  picture: string;
  type: string;

  attack(hero: Hero): void{
      hero.life = hero.life - this.power   
  }
  isAlive():boolean{
      return this.life > 0
  }
}