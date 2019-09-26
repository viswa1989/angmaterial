import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableviewComponent } from './tableview/tableview.component';


const routes: Routes = [
  {
    path: 'tables',
    component: TableviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
