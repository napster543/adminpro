import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//ng2-charts

import {ChartsModule } from 'ng2-charts';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent                                                                                                                                                  
    ],
    exports:[
        DashboardComponent,
        ProgessComponent,
        Graficas1Component,
    ],
    imports:[
        SharedModule,        
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }