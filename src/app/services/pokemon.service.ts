import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon, Type } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root', // Utilisation de 'root' pour une portée globale, mais pourrait aussi être omis dans un composant autonome.
})
export class PokemonService {
  private apiPokemonUrl = 'http://localhost:/api/pokemon';
  private apiTypeUrl = 'http://localhost:/api/type';

  constructor(private http: HttpClient) { }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue); // of transforme une donnée simple en un flux de donnée (Observable) qui emmet la donnée en paramètre (errorValue)
  }

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

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiPokemonUrl}/edit`, pokemon);
  }

  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiPokemonUrl}/${id}`);
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (term.length <= 1) {
      return of([]) // of retourne la valeur sous forme d'un flux
    }

    return this.http.get<Pokemon[]>(`${this.apiPokemonUrl}/search?name=${term.toLowerCase()}`).pipe(
      tap((resPokemonFiltred) => console.table(resPokemonFiltred)),
      catchError((error) => this.handleError(error, []))
    );
  }
}
