import { Component } from '@angular/core';
import { Canciones } from '../canciones';
import { JamendoService } from '../jamendo.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent {
  observable: any;
  observable2: any;
  constructor(private cancionService: JamendoService, private letraService: JamendoService){}
  traer_cancion() {
    let url: any = 'https://api.jamendo.com/v3.0/artists/albums/?client_id=cd0cfcd2&format=jsonpretty'
    this.cancionService.getcancion(url).subscribe(cancion => this.observable = cancion)
    
  }
  sacar_canciones(cancion: Canciones) {
    let url: any = 'https://api.jamendo.com/v3.0/albums/tracks/?client_id=cd0cfcd2&format=jsonpretty&id='+cancion.id
    this.letraService.getletra(url).subscribe(letra => this.observable2 = letra)
    console.log(this.observable2)
    console.log(this.observable)
  }
}
