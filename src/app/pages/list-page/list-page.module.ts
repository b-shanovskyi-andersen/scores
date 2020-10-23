import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonEditorComponent } from './components/person-editor/person-editor.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListPageComponent,
    PersonEditorComponent,
    CardsListComponent,
    PersonCardComponent,
    ListFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
