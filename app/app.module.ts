import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';



import { DemoModalSizesComponent } from './ngx-bootstrap-demo.component'
@NgModule({
  declarations: [DemoModalSizesComponent],
  imports: [
    ModalModule.forRoot(),
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  entryComponents: [],
  bootstrap: [DemoModalSizesComponent]
})
export class AppModule {
}
