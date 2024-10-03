import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, Type } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root', // Utilisation de 'root' pour une portée globale, mais pourrait aussi être omis dans un composant autonome.
})
export class PokemonService {
  private apiPokemonUrl = 'http://localhost:/api/pokemon';
  private apiTypeUrl = 'http://localhost:/api/type';

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiTypeUrl);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiPokemonUrl);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiPokemonUrl}/${id}`);
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiPokemonUrl, pokemon);
  }

  updatePokemon(id: number, pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiPokemonUrl}/edit/${id}`, pokemon);
  }

  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiPokemonUrl}/${id}`);
  }
}
