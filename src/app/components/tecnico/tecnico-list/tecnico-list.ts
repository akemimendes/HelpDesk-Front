import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { Tecnico } from '../../../models/tecnico/tecnico';
import { TecnicoService } from '../../../services/tecnico';
import { Observable, tap } from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tecnico-list',
  imports: [
    RouterLink,
    MatPaginator,
    MatTableModule, 
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './tecnico-list.html',
  styleUrl: './tecnico-list.css'
})
export class TecnicoList implements OnInit {

  ELEMENT_DATA: Tecnico[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: TecnicoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().pipe(tap((res: Tecnico[]) => {
      this.ELEMENT_DATA = res
      this.dataSource = new MatTableDataSource<Tecnico>(res);
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;
    })).subscribe();

  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

