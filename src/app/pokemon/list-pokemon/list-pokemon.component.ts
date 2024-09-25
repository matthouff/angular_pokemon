import { Component } from '@angular/core';
import { POKEMONS } from '../mock/mock-pokemon-list';
import { Router } from '@angular/router';
import { PokemonTypesColorPipe } from '../pipes/pokemon-types-color.pipe';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { DirectivesModule } from '../../directives/directives.module';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    DirectivesModule,
    PokemonTypesColorPipe,
    DatePipe,
    UpperCasePipe,
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {

  constructor(private route: Router) {

  }

  pokemonList = POKEMONS

  goToPokemon(pokemonId: number) {
    this.route.navigate(["/pokemon", pokemonId])
  }

  goToAddForm() {

  }
}
