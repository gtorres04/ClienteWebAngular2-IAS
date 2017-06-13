import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Headers, Http, HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { ConsultingAveComponent } from './component/consulting.ave.component';
import { AddAveComponent } from './component/add.ave.component';
import { EditAveComponent } from './component/edit.ave.component';
import { DeleteAveComponent } from './component/delete.ave.component';
import { ListAveComponent } from './component/list.ave.component';
import { GenericService } from './service/Generic.service';
import { AveService } from './service/Ave.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    JsonpModule, 
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ConsultingAveComponent,
    AddAveComponent,
    ListAveComponent,
    EditAveComponent,
    DeleteAveComponent
  ],
  providers: [GenericService, AveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
