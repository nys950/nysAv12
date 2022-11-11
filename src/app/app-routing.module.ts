import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./views/index/index.component";
import {NosotrosComponent} from "./views/nosotros/nosotros.component";
import {ProyectosComponent} from "./views/proyectos/proyectos.component";

const routes: Routes = [
  { path:'', component: IndexComponent},
  { path:'nosotros', component: NosotrosComponent},
  { path:'proyectos', component: ProyectosComponent},
  { path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
