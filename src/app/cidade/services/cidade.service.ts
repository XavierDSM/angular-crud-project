import { Injectable } from '@angular/core';

import { Cidade } from 'src/app/shared/models/cidade.model';

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  

  constructor() { }

  listarTodas(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }
  
  inserir(cidade: Cidade): void {
    const cidades = this.listarTodas();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listarTodas();
    return cidades.find(cidade => cidade.id === id); 
  }

  atualizar(cidade: Cidade): void{
    const cidades: Cidade[] = this.listarTodas();

    cidades.forEach((obj, index, objs) => {
      if (cidade.id === obj.id){
        objs[index] = cidade
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void{
    let cidades: Cidade[] = this.listarTodas();

    cidades = cidades.filter(cidade => cidade.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
