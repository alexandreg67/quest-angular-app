import { Oppenent } from "./oppenent";

export class Hero {
  id: number;
  life: number;
  power:number;
  attaqueSpeciale: number;
  name: string;
  picture: string;
  type: string;

  constructor(name:string, power: number, life:number, attaqueSpeciale:number, picture: string, type: string) {
      this.name = name;
      this.power = power;
      this.life = life;
      this.attaqueSpeciale = attaqueSpeciale;
      this.picture = picture,
      this.type = type;
  }

  getId():number {
    return this.id
  }

  getName():string {
      return this.name
  }

  setName(name:string):void {
      this.name = name
  }

  getPower():number {
      return this.power
  }

  setPower(power:number) {
      this.power = power
  }

  getAttaqueSpeciale(): number {
    return this.attaqueSpeciale
  }

  getLife():number {
      return this.life
  }

  setLife(life:number) {
      this.life = life
  }

  attack(opponent: Oppenent): void{
      opponent.life = opponent.life - this.power   
  }

  isAlive():boolean{
      return this.life > 0
  }
}