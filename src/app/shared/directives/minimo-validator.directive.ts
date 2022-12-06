import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator, OnInit{

  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }
  ngOnInit(): void { }
  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)){
      return { 'minimo': true, 'requiredValue': +this.valorMinimo}
    }
    if (v < 18){
      return { 'minimo':true, 'requiredValue': +this.valorMinimo }
    }
    return null;
  }

}
