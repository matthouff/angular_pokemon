import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonTypesColorPipe } from '../pipes/pokemon-types-color.pipe';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { DirectivesModule } from '../../directives/directives.module';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../../services/pokemon.service';

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
  styleUrl: './list-pokemon.component.scss',
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private route: Router) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemonList = data;
    });
  }

  goToPokemon(pokemonId: number) {
    this.route.navigate(["/pokemon", pokemonId])
  }

  goToAddForm() {
    this.route.navigate(["pokemon/edit"])
  }
}
