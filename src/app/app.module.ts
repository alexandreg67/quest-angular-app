import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosBorderCardDirective } from './border-card.directive';
import { herosTypeColorPipe } from './heros-type-color.pipe';
import { ChoisiTonHerosComponent } from './choisi-ton-heros/choisi-ton-heros.component';
import { CombatHerosComponent } from './combat-heros/combat-heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosBorderCardDirective,
    herosTypeColorPipe,
    ChoisiTonHerosComponent,
    CombatHerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
