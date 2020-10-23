import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsPageComponent } from './components/person-details-page/person-details-page.component';
import { PersonDetailsRoutingModule } from './person-details-page-routing.module';

@NgModule({
  declarations: [ PersonDetailsPageComponent ],
  imports: [
    CommonModule,
    PersonDetailsRoutingModule
  ]
})
export class PersonDetailsModule { }
