import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Credenciais } from '../../models/credenciais';
import { FormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  imports:
    [
      MatFormFieldModule,
      FormsModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule
    ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(
    private toast: ToastrService,
    private service: Auth,
    private router: Router) { }


  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.min(3));

  logar() {
    this.service.authenticate(this.creds).pipe(
      tap((res: HttpResponse<any>) => {
        this.service.successfulLogin(res.headers.get('Authorization').substring(7));
        this.router.navigate([''])
        this.toast.info(res.headers.get('Authorization').substring(7));
        // Further processing of the token or header
      }, (res: HttpResponse<any>) => {this.toast.error("Usuário ou/e senha inválida")}),
    )
      .subscribe();
  }



  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
