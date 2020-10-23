import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonEditorComponent } from './components/person-editor/person-editor.component';

@NgModule({
  declarations: [
    ListPageComponent,
    PersonEditorComponent,
    CardsListComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListPageModule { }
