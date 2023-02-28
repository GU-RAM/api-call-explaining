import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ChuckApiService } from '../chuck-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.loggedIn = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
