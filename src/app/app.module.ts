import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartNgModule } from "./barchart-ng/barchart-ng.module";
import { BarchartNgComponent } from './barchart-ng/barchart-ng.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        BarchartNgComponent
    ],
    providers: [
        { provide: NgChartsConfiguration, useValue: { generateColors: true } }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgChartsModule,
        BrowserAnimationsModule,
        BarchartNgModule,
        MatSlideToggleModule,
        MatButtonModule
    ]
})
export class AppModule { }
