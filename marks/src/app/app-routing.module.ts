import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksListComponent } from './pages/marks-list/marks-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'marks', pathMatch: 'full'},
  {path: 'marks', component: MarksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
