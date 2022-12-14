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
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FormsModule } from "@angular/forms";
import { AlertsComponent } from './components/alerts/alerts.component';
import { LightboxModule } from 'ngx-lightbox';
import { Proyecto1Component } from './gallery/proyecto1/proyecto1.component';
import { Proyecto2Component } from './components/gallery/proyecto2/proyecto2.component';
import { Proyecto3Component } from './components/gallery/proyecto3/proyecto3.component';
import { Proyecto4Component } from './components/gallery/proyecto4/proyecto4.component';


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
    GaleriaComponent,
    SocialMediaComponent,
    AlertsComponent,
    Proyecto1Component,
    Proyecto2Component,
    Proyecto3Component,
    Proyecto4Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        LightboxModule
    ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
