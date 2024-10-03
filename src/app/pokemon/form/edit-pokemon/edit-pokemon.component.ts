import { Component, OnInit } from '@angular/core';
import { FormPokemonComponent } from '../form-pokemon/form-pokemon.component';
import { Pokemon } from '../../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [FormPokemonComponent],
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(Number(this.route.snapshot.paramMap.get("id"))).subscribe((data) => {
      this.pokemon = data;
    })
  }
}
