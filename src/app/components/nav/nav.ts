import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { Header } from '../header/header';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Auth } from '../../services/auth';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-nav',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    Header,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav implements OnInit {

  constructor(
    private router: Router, 
    private authService: Auth,
    private toast:ToastrService) {
  }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  logout() {
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout')
  }
}
