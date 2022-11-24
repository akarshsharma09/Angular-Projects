import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelusComponent } from './component/telus/telus.component';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { StudentdataComponent } from './studentdata/studentdata.component';

const routes: Routes = [
  {
    path:"showVacancy",
    component:VacancyComponent,
    pathMatch:"full"
  },
  {
    path:"telus",
    component:TelusComponent,
    pathMatch:"full"
  },
  {
    path:"studentdata",
    component:StudentdataComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
