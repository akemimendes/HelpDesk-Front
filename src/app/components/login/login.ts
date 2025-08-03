import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
