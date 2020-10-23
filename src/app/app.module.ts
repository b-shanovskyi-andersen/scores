import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from './core/core.module';
import { ListPageModule } from './pages/list-page/list-page.module';
import { PersonDetailsModule } from './pages/person-details-page/person-details.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ListPageModule,
    PersonDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
