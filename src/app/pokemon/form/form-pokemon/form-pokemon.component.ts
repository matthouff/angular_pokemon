import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pokemon, Type } from '../../pokemon';
import { PokemonService } from '../../../services/pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypesColorPipe } from '../../pipes/pokemon-types-color.pipe';

@Component({
  selector: 'app-form-pokemon',
  standalone: true,
  imports: [FormsModule, PokemonTypesColorPipe],
  templateUrl: './form-pokemon.component.html',
  styleUrl: './form-pokemon.component.scss',
})
export class FormPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  typesList: Type[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.pokemonService.getTypes().subscribe((data) => {
      this.typesList = data;
    });
    this.isAddForm = this.route.url.includes("add");
  }

  // Vérifie si le type est déjà dans les types du pokémon
  hasType(type: Type): boolean {
    return this.pokemon.types.some(x => x.id === type.id);
  }

  selectType(type: Type): void {
    if (this.pokemon.types.length < 3) {
      this.pokemon.types.push(type)
    }
  }
  removeType(type: Type) {
    const index = this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index, 1)
  }

  handleChangeImage(pokemonNumber: any): void {
    let num: string;
    pokemonNumber = pokemonNumber.viewModel;

    if (pokemonNumber > 0 && pokemonNumber < 10) {
      num = "00" + pokemonNumber;
    } else if (pokemonNumber < 100) {
      num = "0" + pokemonNumber;
    } else {
      num = pokemonNumber;
    }

    this.pokemon.picture = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
  }

  isTypeValid(type: Type): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false
    }
    return true;
  }



  onSubmit(): void {
    if (this.isAddForm) {
      this.pokemonService.createPokemon(this.pokemon).subscribe((response) => {
        this.route.navigate(["/pokemon", response.id])
      })
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe((response) => {
        console.log(response);
        this.route.navigate(["/pokemon", response.id])
      })
    }
  }

}
