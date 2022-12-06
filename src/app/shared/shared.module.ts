import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericoDirective, MinimoValidatorDirective } from './directives';
import { MeuPipePipe } from './pipes';



@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ]
})
export class SharedModule { }
