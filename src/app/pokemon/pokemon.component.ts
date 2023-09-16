import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../interfaces/api/pokeapi/IPokemon';
import { IResumenPokemon } from '../interfaces/api/pokeapi/IResumenPokemon';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() resumenPokemon? : IResumenPokemon
  pokemon?: IPokemon
  constructor(public pokeapiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapiService.getDetallesPokemon(this.resumenPokemon?.url || "").subscribe(respuesta =>{
      this.pokemon = respuesta
    }
  )
  }

}
