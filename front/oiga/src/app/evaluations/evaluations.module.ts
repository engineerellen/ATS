import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { evaluationsRoutingModule } from './evaluations-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    evaluationsRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class evaluationsModule { }


 
