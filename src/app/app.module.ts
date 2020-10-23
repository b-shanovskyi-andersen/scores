import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { PersonDetailsPageComponent } from './person-details-page/person-details-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    PersonDetailsPageComponent,
    PersonEditorComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
