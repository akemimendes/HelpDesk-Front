import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Tecnico } from '../../../models/tecnico/tecnico';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective } from 'ngx-mask';
import { TecnicoService } from '../../../services/tecnico';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


@Component({
  selector: 'app-tecnico-create',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxMaskDirective,

  ],
  templateUrl: './tecnico-create.html',
  styleUrl: './tecnico-create.css'
})
export class TecnicoCreate {


  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  constructor(
    private service: TecnicoService,
    private toast: ToastrService,
    private router: Router,
  ) { }


  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  create(): void {
    /* this.service.create(this.tecnico).pipe(tap(() => {
       this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
       this.router.navigate(['tecnicos'])
     }, ex => {
       if (ex.error.errors) {
         ex.error.errors.forEach(element => {
           this.toast.error(element.message);
         });
       } else {
         this.toast.error(ex.error.message);
       }
     }))*/



   
      this.service.create(this.tecnico);
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['tecnicos']);

    
  }

  addPerfil(perfil: any): void {
    if (this.tecnico.perfis.includes(perfil)) {
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      this.tecnico.perfis.push(perfil);
    }

  }

  validaCampos() {
    return this.nome.valid && this.cpf.valid
      && this.email.valid && this.senha.valid
  }
}
