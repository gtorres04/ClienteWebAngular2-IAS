import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingAveComponent } from './component/consulting.ave.component';
import { AddAveComponent } from './component/add.ave.component';
import { ListAveComponent } from './component/list.ave.component';
import { EditAveComponent } from './component/edit.ave.component';
import { DeleteAveComponent } from './component/delete.ave.component';
const routes: Routes = [
  { path: '', redirectTo: '/list-ave', pathMatch: 'full' },
  { path: 'consulting-ave', component: ConsultingAveComponent },
  { path: 'add-ave', component: AddAveComponent },
  { path: 'list-ave', component: ListAveComponent },
  { path: 'edit-ave/:id', component: EditAveComponent },
  { path: 'delete-ave/:id', component: DeleteAveComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }