import { Component, OnInit } from '@angular/core';
import { Zona } from '../domain/Zona';
import { GenericService } from '../service/Generic.service';
import { ListaDto } from '../domain/ListaDto';

@Component({
  selector: 'consulting-ave',
  templateUrl: '../views/consulting.ave.component.html',
  moduleId: module.id
})
export class ConsultingAveComponent implements OnInit {

  constructor(private genericService: GenericService) { }
  zonas: Zona[];
  mensajeOperacionEliminacion: String = undefined;

  /**
   * se otiene el listado de las zonas registrados en base de datos.
   */
  getZonas(): void {
    this.genericService.listAll("zona").then(listaDto => this.zonas = listaDto.list as Zona[]);
  }

  ngOnInit(): void {
    this.getZonas();
  }
}