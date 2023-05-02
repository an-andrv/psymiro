import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthLoginInfo } from 'src/app/shared/services/auth/auth.classes';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TokenStorageService } from 'src/app/shared/services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = {} as AuthLoginInfo;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  private onDestroy$ = new Subject<true>();


  constructor(private tokenService: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onSubmit(): void {
    this.authService.attemptAuth(this.loginForm)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: response => {
          this.tokenService.setToken(response.token);
          this.tokenService.setUsername(response.username);
          this.tokenService.setAuthorities(response.roles);

          this.isLoggedIn = true;
          this.isLoginFailed = false;
          this.roles = this.tokenService.getAuthorities();
          this.reloadPage();
        },
        error: e => {
          this.errorMessage = e.error.message;
          this.isLoginFailed = true;
        }
      });
  }

  reloadPage(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
