import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private route: Router) { }
  @Input() user: { email: string, password: string } = { email: "", password: "" };

  goToRegister() {
    this.route.navigate(["register"])
  }

  onSubmit(): void {
    this.authService.login(this.user.email, this.user.password).subscribe((response) => {
      console.log(response);
    })
  }
}
