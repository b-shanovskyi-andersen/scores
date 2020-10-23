import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonEditorComponent } from './components/person-editor/person-editor.component';
import { ListPageRoutingModule } from './list-page-routing.module';

@NgModule({
  declarations: [
    ListPageComponent,
    PersonEditorComponent,
    CardsListComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule
  ]
})
export class ListPageModule { }
