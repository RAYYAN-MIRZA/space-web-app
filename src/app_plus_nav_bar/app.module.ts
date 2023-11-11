import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DestinyComponent } from 'src/pages/destiny/destiny.component';
import { CrewComponent } from 'src/pages/crew/crew.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { TechComponent } from 'src/pages/tech/tech.component';
@NgModule({
  declarations: [
    AppComponent,
    DestinyComponent,
    CrewComponent,
    HomeComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
