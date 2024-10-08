import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../auth.component.scss'
})
export class RegisterComponent {

  @Input() user: User;
  @Input() passwordVerif: string;
  waitCode: boolean;
  code: string;
  message: string;
  hide: boolean = true;
  auth: AuthService;


  constructor(
    private authService: AuthService,
    private router: Router,
    private navBar: NotificationService
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
    this.user = new User()
  }
  onSubmit(): void {
    this.authService.createUser(this.user).subscribe({
      next: (response) => {
        console.log('Requête réussie:', response);
      },
      error: (error) => {
        this.navBar.openSnackBar(error.error, error.ok, "Close");
      }
    })
  }

  onCodeSubmit(): void {
    this.authService.sendCode(this.code).subscribe((response: any) => {
      console.log(response.error);
    })
  }
}
