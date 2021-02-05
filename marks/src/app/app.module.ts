import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms and Http
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarksListComponent } from './pages/marks-list/marks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MarksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
