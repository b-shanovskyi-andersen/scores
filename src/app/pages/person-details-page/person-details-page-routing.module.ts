import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonDetailsPageComponent } from './components/person-details-page/person-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: PersonDetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonDetailsRoutingModule { }
