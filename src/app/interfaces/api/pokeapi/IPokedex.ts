import { IResumenPokemon } from "./IResumenPokemon";

export interface IPokedex {
    count: number;
    next: string;
    results: IResumenPokemon[];
}
