import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { PersonDetailsPageComponent } from './person-details-page/person-details-page.component';

const LIST_PATH = 'list';

const routes: Routes = [
  { 
    path: LIST_PATH, 
    component: ListPageComponent,
    pathMatch: 'full'
  },
  { 
    path: `${LIST_PATH}/:id`, 
    component: PersonDetailsPageComponent},
  {
    path: '',
    redirectTo: LIST_PATH,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
