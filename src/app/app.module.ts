import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { NavbarIndexComponent } from './navegation/navbar/navbar-index/navbar-index.component';
import { MegaMenuComponent } from './navegation/navbar/mega-menu/mega-menu.component';
import { CalltoactionsComponent } from './components/calltoactions/calltoactions.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FaqsectionsComponent } from './components/faqsections/faqsections.component';
import {ProyectosComponent} from "./views/proyectos/proyectos.component";
import { GalleryComponent } from './components/gallery/gallery.component';
import { IntroComponent } from './components/intro/intro.component';
import { MontajesMecanicosComponent } from './servicios/montajes-mecanicos/montajes-mecanicos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarIndexComponent,
    MegaMenuComponent,
    CalltoactionsComponent,
    CaruselComponent,
    FooterComponent,
    ContactusComponent,
    ClientsComponent,
    NosotrosComponent,
    BreadcrumbComponent,
    FaqsectionsComponent,
    ProyectosComponent,
    GalleryComponent,
    IntroComponent,
    MontajesMecanicosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
