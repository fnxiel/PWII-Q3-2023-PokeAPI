import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokedex } from './interfaces/api/pokeapi/IPokedex';
import { IPokemon } from './interfaces/api/pokeapi/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlBase: string = 'https://pokeapi.co/api/v2'

  constructor(public cliente: HttpClient) { }

  getListadoPokemons(limit?: number, offset?: number): Observable<IPokedex>{
    let url = `${this.urlBase}/pokemon`;
    if(limit || offset) url = url.concat('?');
    url = url.concat((limit) ? `limit=${limit}` : '');
    url = url.concat((offset) ? `&offset=${offset}` : '');
    console.log(url);
    return this.cliente.get<IPokedex>(url)
  }

  getDetallesPokemon(url: string): Observable<IPokemon>{
    return this.cliente.get<IPokemon>(url)
  }


}
