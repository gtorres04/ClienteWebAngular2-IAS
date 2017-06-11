import { Component, OnInit } from '@angular/core';
import { Ave } from '../domain/Ave';
import { GenericService } from '../service/Generic.service';
import { ListaDto } from '../domain/ListaDto';
import { Location } from '@angular/common';

@Component({
  selector: 'list-ave',
  templateUrl: '../views/list.ave.component.html',
  moduleId: module.id
})
export class ListAveComponent implements OnInit {

  constructor(private location: Location, private genericService: GenericService) { }
  aves: Ave[];
  mensajeOperacionEliminacion: String = undefined;

  ngOnInit(): void {
    this.getAves();
  }
  /**
   * se otiene el listado de las aves registrados en base de datos.
   */
  getAves(): void {
    this.genericService.listAll("ave").then(listaDto => this.aves = listaDto.list as Ave[]);
  }
  /**
   * Regresamos a la vista (route) anterior.
   */
  goBack(): void {
      this.location.back();
  }
  
}