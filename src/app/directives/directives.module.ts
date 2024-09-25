import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';



@NgModule({
  declarations: [
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [BorderCardDirective]
})
export class DirectivesModule { }
