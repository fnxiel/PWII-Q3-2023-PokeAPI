import { IPokemonSprites } from "./IPokemonSprites";

export interface IPokemon{
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: IPokemonSprites;
}
