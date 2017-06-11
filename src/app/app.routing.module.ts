import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingAveComponent } from './component/consulting.ave.component';
const routes: Routes = [
  { path: '', redirectTo: '/consulting-ave', pathMatch: 'full' },
  { path: 'consulting-ave', component: ConsultingAveComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }