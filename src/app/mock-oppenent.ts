import { Hero } from "./hero";
import { Oppenent } from "./oppenent";

export const OPPENENTS = [
    {
        id: 1,
        name: "Louis",
        life: 110,
        power: 15,
        attaqueSpeciale: 10,
        picture: "../assets/21474462.jpg",
        type: "",
        attack(hero: Hero): void{
            hero.life = hero.life - this.power   
        },
        isAlive():boolean{
            return this.life > 0
        }
    },
    {
        id: 2,
        name: "Jeremy",
        life: 110,
        power: 15,
        attaqueSpeciale: 10,
        picture: "../assets/21474462.jpg",
        type: "",
        attack(hero: Hero): void{
            hero.life = hero.life - this.power   
        },
        isAlive():boolean{
            return this.life > 0
        }
    }
]