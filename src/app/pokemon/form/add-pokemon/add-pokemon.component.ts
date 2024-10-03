import { Component, OnInit } from '@angular/core';
import { FormPokemonComponent } from '../form-pokemon/form-pokemon.component';
import { Pokemon } from '../../pokemon';


@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [FormPokemonComponent],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss'
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon()
    console.log(this.pokemon);
  }
}
