import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './code.component.html',
})
export class CodeComponent {
  @Input() code: string;

  constructor(private route: Location, private authService: AuthService) { }


  goBack() {
    this.route.back();
  }
  onSubmit(): void {
    this.authService.sendCode(this.code).subscribe((response: any) => {
      console.log(response.error);
    })
  }

}
