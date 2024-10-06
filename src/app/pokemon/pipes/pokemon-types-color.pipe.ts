import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypesColor',
  standalone: true
})
export class PokemonTypesColorPipe implements PipeTransform {

  transform(type: string): string {



    // Supprime le caractère '#' s'il est présent
    let color: string = type.replace('#', '');

    // Convertit les valeurs hexadécimales en RGB
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Calcul de la luminosité (méthode standard)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    color = brightness < 128 ? "#FFFFFF" : "#000000";

    // switch (type) {
    //   case 'feu':
    //     color = 'orange';
    //     break;
    //   case 'eau':
    //     color = 'aqua';
    //     break;
    //   case 'plante':
    //     color = 'green';
    //     break;
    //   case 'insecte':
    //     color = '#daa26a';
    //     break;
    //   case 'normal':
    //     color = '#CCCCCC';
    //     break;
    //   case 'vol':
    //     color = '#91bbff';
    //     break;
    //   case 'poison':
    //     color = '#db92e3';
    //     break;
    //   case 'fée':
    //     color = 'pink';
    //     break;
    //   case 'psy':
    //     color = '#8e4ace';
    //     break;
    //   case 'electrik':
    //     color = 'yellow';
    //     break;
    //   case 'combat':
    //     color = '#ba1a1a';
    //     break;
    //   default:
    //     color = '#CCCCCC';
    //     break;
    // }

    // Si la luminosité est inférieure à 128, on considère la couleur comme foncée
    return `
    background-color: ${type}; 
    color: ${color};
    border: none;
    `;

  }

}
