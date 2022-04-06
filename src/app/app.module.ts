import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
