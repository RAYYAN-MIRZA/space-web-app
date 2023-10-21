import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from 'src/pages/crew/crew.component';
import { DestinyComponent } from 'src/pages/destiny/destiny.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { TechComponent } from 'src/pages/tech/tech.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'destination',component:DestinyComponent},
  {path:'crew',component:CrewComponent},
  {path:'technology',component:TechComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
