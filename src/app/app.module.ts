import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgessComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PerfilComponent } from './shared/perfil/perfil.component';
import { MenufooterComponent } from './shared/menufooter/menufooter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PerfilComponent,
    MenufooterComponent,
    FooterComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }