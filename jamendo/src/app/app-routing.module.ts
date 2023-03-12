import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CancionesComponent} from './canciones/canciones.component'
const routes: Routes = [
  {path: 'cancion', component:CancionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
