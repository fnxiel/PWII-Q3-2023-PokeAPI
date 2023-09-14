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

  getListadoPokemons(limit?: number): Observable<IPokedex>{
    const url = (limit) ? `${this.urlBase}/pokemon?limit=${limit}` : `${this.urlBase}/pokemon`
    return this.cliente.get<IPokedex>(url)
  }

  getDetallesPokemon(url: string): Observable<IPokemon>{
    return this.cliente.get<IPokemon>(url)
  }


}
