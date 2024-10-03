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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: Type[];
  isAddForm: boolean;

  constructor(
    private pokemonService: PokemonService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.pokemonService.getTypes().subscribe((data) => {
      this.types = data;
    });
    this.isAddForm = this.route.url.includes("add");
    console.log(this.types);
  }

  hasType(type: Type): boolean {
    return this.pokemon.types.includes(type);
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

    console.log(typeof num);
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
    console.log('coucou1');
    if (this.isAddForm) {
      this.pokemonService.createPokemon(this.pokemon).subscribe((response) => {
        this.route.navigate(["/pokemon", response.id])
      })
    } else {
      this.pokemonService.updatePokemon(this.pokemon.id, this.pokemon).subscribe((response) => {
        console.log(response);
        this.route.navigate(["/pokemon", response.id])
      })
    }
  }

}
