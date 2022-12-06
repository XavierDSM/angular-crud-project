import { Injectable } from '@angular/core';

import { Estado } from 'src/app/shared/models/estado.model';

const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }
  
  inserir(cidade: Estado): void {
    const estados = this.listarTodos();
    cidade.id = new Date().getTime();
    estados.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado | undefined {
    const estados: Estado[] = this.listarTodos();
    return estados.find(cidade => cidade.id === id); 
  }

  atualizar(cidade: Estado): void{
    const estados: Estado[] = this.listarTodos();

    estados.forEach((obj, index, objs) => {
      if (cidade.id === obj.id){
        objs[index] = cidade
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: number): void{
    let estados: Estado[] = this.listarTodos();

    estados = estados.filter(cidade => cidade.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
