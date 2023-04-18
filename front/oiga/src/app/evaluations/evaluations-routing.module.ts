import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'evaluations', redirectTo: 'evaluations/index', pathMatch: 'full'},
  { path: 'evaluations/index', component: IndexComponent },
  { path: 'evaluations/:Id/view', component: ViewComponent },
  { path: 'evaluations/create', component: CreateComponent },
  { path: 'evaluations/:Id/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class evaluationsRoutingModule { }