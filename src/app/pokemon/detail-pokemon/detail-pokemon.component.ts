import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock/mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { DatePipe } from '@angular/common';
import { PokemonTypesColorPipe } from '../pipes/pokemon-types-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [DatePipe, PokemonTypesColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined = undefined;

  constructor(private url: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const pokemonId = this.url.snapshot.paramMap.get("id")
    this.pokemon = POKEMONS.find(pokemon => pokemon.id == +pokemonId!)
  }

  goToPokemonList() {
    this.route.navigate(["/pokemon-list"])
  }

  goToEdit() {

  }

  onDeletePokemon(test: Pokemon): void {

  }
}
