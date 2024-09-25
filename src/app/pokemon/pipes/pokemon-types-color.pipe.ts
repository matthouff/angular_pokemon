import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypesColor',
  standalone: true
})
export class PokemonTypesColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'orange';
        break;
      case 'Eau':
        color = 'aqua';
        break;
      case 'Plante':
        color = 'green';
        break;
      case 'Insecte':
        color = '#daa26a';
        break;
      case 'Normal':
        color = '#CCCCCC';
        break;
      case 'Vol':
        color = '#91bbff';
        break;
      case 'Poison':
        color = '#db92e3';
        break;
      case 'Fée':
        color = 'pink';
        break;
      case 'Psy':
        color = '#8e4ace';
        break;
      case 'Electrik':
        color = 'yellow';
        break;
      case 'Combat':
        color = '#ba1a1a';
        break;
      default:
        color = '#CCCCCC';
        break;
    }

    return `background-color: ${color}`;

  }

}
