import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoisiTonHerosComponent } from './choisi-ton-heros/choisi-ton-heros.component';
import { CombatHerosComponent } from './combat-heros/combat-heros.component';
import { VainqueurComponent } from './vainqueur/vainqueur.component';

const routes: Routes = [
  { path: 'list-heros', component: ChoisiTonHerosComponent},
  { path: 'combat/:id', component: CombatHerosComponent},
  { path: 'app-vainqueur', component: VainqueurComponent},
  { path: '', redirectTo: 'list-heros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
