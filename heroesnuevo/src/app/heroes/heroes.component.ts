import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[] ;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
  // mensaje, 1 mejora, el tutorial pone que se repita el mensaje cada vez que pulses un campeon
  // con la linea this.messageService.clear() cada vez que pulsamos un campeon elimina el mensaje y despues añade uno
  // onSelect(hero:Hero):void{
  //   this.selectedHero=hero;
  //   this.messageService.clear();
  //   this.messageService.add(`HeroesComponent: Heroe Seleccionado id=${hero.id}`)
  // }
  
  
 

