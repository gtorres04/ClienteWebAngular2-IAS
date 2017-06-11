import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Headers, Http, HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { ConsultingAveComponent } from './component/consulting.ave.component';
import { GenericService } from './service/Generic.service';
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
    ConsultingAveComponent
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
