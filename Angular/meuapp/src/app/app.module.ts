import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './Views/mainpage/mainpage.component';
import { ChecklistComponent } from './Views/mainpage/Components/checklist/checklist.component';
import { NonLoggednavbarComponent } from './Components/non-loggednavbar/non-loggednavbar.component';
import { ChecklistitemComponent } from './Views/mainpage/Components/checklist/Components/checklistitem/checklistitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ChecklistComponent,
    NonLoggednavbarComponent,
    ChecklistitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
