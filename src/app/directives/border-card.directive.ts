import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  defaultColor: string[] = ['#FFFFFF']; // Default border color

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder(this.defaultColor); // Set initial border color
    this.hoverColor = this.defaultColor;
  }

  @Input() hoverColor: string[]; // Color on mouse hover

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  private setBorder(types: string[]) {
    const colors = types.map(type => {
      if (type === "Plante") {
        return "green";
      } else if (type == "Poison") {
        return "purple";
      } else if (type == "Feu") {
        return "#c93904";
      } else if (type == "Eau") {
        return "#2038ab";
      } else if (type === "Insecte") {
        return "#633514";
      } else if (type === "Vol") {
        return "#91bbff";
      } else if (type === "Electrik") {
        return "#bfaa06";
      } else if (type === "Fée") {
        return "#de7edc";
      } else if (type === "Combat") {
        return "#ba1a1a";
      } else if (type === "Psy") {
        return "#8e4ace";
      } else if (type === "Normal") {
        return "#555555"
      } else {
        return "#FFFFFF"
      }
    })
    const gradient: string = colors.length < 2 ? colors[0] : `linear-gradient(to right,${colors.join(",")})`

    this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'background', gradient);
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '30px');
  }
}