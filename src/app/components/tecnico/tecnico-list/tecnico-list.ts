import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { Tecnico } from '../../../models/tecnico/tecnico';


@Component({
  selector: 'app-tecnico-list',
  imports: [MatPaginator,MatTableModule,CdkTableModule],
  templateUrl: './tecnico-list.html',
  styleUrl: './tecnico-list.css'
})
export class TecnicoList {
  ELEMENT_DATA: Tecnico[] = [{
    id: '1',
    nome:'Akemi Mendes',
    email:'akemi@hotmail.com',
    cpf: '054389084-86',
    senha: '123',
    perfis: ['0'],
    dataCriacao:'15/08/2022'
  }]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

