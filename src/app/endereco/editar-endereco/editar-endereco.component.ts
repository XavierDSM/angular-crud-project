import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { EstadoService } from 'src/app/estado/services/estado.service';
import { Cidade, Endereco, Estado } from 'src/app/shared';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;
  cidades: Cidade[] = [];
  estados: Estado[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined){
      this.endereco = res;
      this.cidades = this.cidadeService.listarTodas();
      this.estados = this.estadoService.listarTodos();
      }
    else
      throw new Error ("endereco não encontrado: id = "+id);
  }
  atualizar(): void {
    if (this.formEndereco.form.valid){
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }

}
