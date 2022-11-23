import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OneaddComponent } from './oneadd/oneadd.component';
import { DateComponent } from './date/date.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { DatePipe } from '@angular/common';
const routes: Routes = [
 {path:'one',component:OneaddComponent},{path:'date',component:DateComponent},{path:'drop',component:DropdownComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OneaddComponent,
    DateComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),MatSelectModule,DatePipe ,
    MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatListModule,MatCardModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
