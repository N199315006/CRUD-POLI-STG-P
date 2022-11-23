import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFrontEnd';
  isLoggedIn = false;

  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('ngOnInit ->' + this.isLoggedIn);
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
