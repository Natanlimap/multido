import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './Views/mainpage/mainpage.component';
import { ChecklistComponent } from './Views/mainpage/Components/checklist/checklist.component';
import { NonLoggednavbarComponent } from './Components/non-loggednavbar/non-loggednavbar.component';
import { ChecklistitemComponent } from './Views/mainpage/Components/checklist/Components/checklistitem/checklistitem.component';
import { AdicionarlistaComponent } from './Views/mainpage/Components/adicionarlista/adicionarlista.component';
import { HomePageComponent } from './Views/home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ChecklistComponent,
    NonLoggednavbarComponent,
    ChecklistitemComponent,
    AdicionarlistaComponent,
    HomePageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
