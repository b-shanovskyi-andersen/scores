import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people/people.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    PeopleService
  ]
})
export class CoreModule { }
