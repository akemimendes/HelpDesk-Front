import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router,RouterLink } from '@angular/router';
import { Header } from '../header/header';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';




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
    private router: Router) { 

    }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }
}
