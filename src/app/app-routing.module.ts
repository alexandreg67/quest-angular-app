import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoisiTonHerosComponent } from './choisi-ton-heros/choisi-ton-heros.component';
import { CombatHerosComponent } from './combat-heros/combat-heros.component';

const routes: Routes = [
  { path: 'list-heros', component: ChoisiTonHerosComponent},
  { path: 'combat/:id', component: CombatHerosComponent},
  { path: '', redirectTo: 'list-heros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
