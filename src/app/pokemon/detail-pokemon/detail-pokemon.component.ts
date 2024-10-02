import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { DatePipe } from '@angular/common';
import { PokemonTypesColorPipe } from '../pipes/pokemon-types-color.pipe';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [DatePipe, PokemonTypesColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss'
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private url: ActivatedRoute, private route: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId = this.url.snapshot.paramMap.get("id")
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe((data) => {
        this.pokemon = data;
      })
    }
  }

  goToPokemonList() {
    this.route.navigate(["/pokemon-list"])
  }

  goToEdit() {

  }

  onDeletePokemon(pokemon: Pokemon): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce Pokémon ?")) {
      this.pokemonService.deletePokemon(pokemon.id).subscribe(() => {
        // Suppression réussie, retirer le Pokémon de l'affichage
        this.pokemon = undefined;
        this.route.navigate(["/pokemon-list"])
      });
    }

  }
}
