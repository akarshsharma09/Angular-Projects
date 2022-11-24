import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AkarshComponent } from './component/akarsh/akarsh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TelusComponent } from './component/telus/telus.component';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentdataComponent } from './studentdata/studentdata.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AkarshComponent,
    TelusComponent,
    VacancyComponent,
    StudentdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
