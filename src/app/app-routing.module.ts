import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DragAndDropComponent} from './drag-and-drop/drag-and-drop.component';
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"forms", component:FormsComponent},
  {path:"reactive", component: ReactiveFormsComponent},
  {path:"draganddrop", component:DragAndDropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
