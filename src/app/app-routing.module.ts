import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/components/list-page/list-page.component';
import { PersonDetailsPageComponent } from './pages/person-details-page/components/person-details-page/person-details-page.component';

const LIST_PATH = 'list';

const routes: Routes = [
  { 
    path: LIST_PATH, 
    loadChildren: () => import('./pages/list-page/list-page.module').then(m => m.ListPageModule),
    pathMatch: 'full'
  },
  { 
    path: `${LIST_PATH}/:id`, 
    loadChildren: () => import('./pages/person-details-page/person-details.module').then(m => m.PersonDetailsModule),
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
