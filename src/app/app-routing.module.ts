import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./views/index/index.component";
import {NosotrosComponent} from "./views/nosotros/nosotros.component";
import {ProyectosComponent} from "./views/proyectos/proyectos.component";
import {MontajesMecanicosComponent} from "./servicios/montajes-mecanicos/montajes-mecanicos.component";

const routes: Routes = [
  {
    path:'servicios',
    children: [
      { path:'montajes', component: MontajesMecanicosComponent}
    ],
  },

  { path:'nosotros', component: NosotrosComponent},
  { path:'proyectos', component: ProyectosComponent},
  { path:'', component: IndexComponent},
  { path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
