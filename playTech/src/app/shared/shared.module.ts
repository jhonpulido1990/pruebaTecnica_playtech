import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [FormLoginComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FormLoginComponent, CarouselComponent]
})
export class SharedModule { }
