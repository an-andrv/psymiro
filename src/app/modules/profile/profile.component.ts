import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../shared/services/auth/token-storage.service';
import { Info } from './models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  info = {} as Info;

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      authorities: this.tokenService.getAuthorities(),
    };
  }

  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }
}
