import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BluePageComponent } from './blue-page/blue-page.component';
import { GreenPageComponent } from './green-page/green-page.component';
import { OrangePageComponent } from './orange-page/orange-page.component';
import { YellowPageComponent } from './yellow-page/yellow-page.component';
import { RedPageComponent } from './red-page/red-page.component';

const routes: Routes = [
  { path: 'blue-page', component: BluePageComponent },
  { path: 'green-page', component: GreenPageComponent },
  { path: 'orange-page', component: OrangePageComponent },
  { path: 'yellow-page', component: YellowPageComponent },
  { path: 'red-page', component: RedPageComponent },
  { path: '', redirectTo: '/blue-page', pathMatch: 'full' }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
