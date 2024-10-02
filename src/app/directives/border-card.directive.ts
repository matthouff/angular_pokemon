import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Type } from '../pokemon/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  defaultColor: Type[] = [{ id: -1, name: "", color: "#FFFFFF" }]; // Default border color

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder(this.defaultColor); // Set initial border color
    this.hoverColor = this.defaultColor;
  }

  @Input() hoverColor: Type[] | []; // Color on mouse hover

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  private setBorder(types: Type[]) {
    const typesColor = types.map(type => { return type?.color });

    const gradient: string = types?.length == 1 ? types[0]?.color : `linear-gradient(to right,${typesColor.join(",")})`

    if (gradient) {
      this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
      this.renderer.setStyle(this.el.nativeElement, 'background', gradient);
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '30px');
    }
  }
}