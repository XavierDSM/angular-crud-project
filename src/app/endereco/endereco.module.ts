import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';



@NgModule({
  declarations: [
    EditarEnderecoComponent,
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class EnderecoModule { }
