import { Component, OnInit } from '@angular/core';
import { Ave } from '../domain/Ave';
import { FiltroAve } from '../domain/FiltroAve';
import { Zona } from '../domain/Zona';
import { GenericService } from '../service/Generic.service';
import { AveService } from '../service/Ave.service';
import { ListaDto } from '../domain/ListaDto';
import { Location } from '@angular/common';

@Component({
  selector: 'list-ave',
  templateUrl: '../views/list.ave.component.html',
  moduleId: module.id
})
export class ListAveComponent implements OnInit {

  constructor(private location: Location, private genericService: GenericService, private aveService: AveService) { 
    
  }
  aves: Ave[];
  zonas: Zona[];
  mensajeOperacionEliminacion: String = undefined;
  filtrar:boolean = true;
  patronNombre: String = undefined;

  ngOnInit(): void {
    this.getAves();
    this.getZonas();
  }
  /**
   * se otiene el listado de las aves registrados en base de datos.
   */
  getAves(): void {
    this.genericService.listAll("ave").then(listaDto => this.aves = listaDto.list as Ave[]);
  }
  /**
   * se otiene el listado de las aves registrados en base de datos.
   */
  getZonas(): void {
    this.genericService.listAll("zona").then(listaDto => this.zonas = listaDto.list as Zona[]);
  }
  /**
   * Regresamos a la vista (route) anterior.
   */
  goBack(): void {
      this.location.back();
  }

  listarPorFiltrar(): void{
    let filtroAve:FiltroAve=new FiltroAve();
    filtroAve.nombre = this.patronNombre;
    filtroAve.zonaDto = new Zona();
    filtroAve.zonaDto.codigo = "";
    this.aveService.findByNameAndZone(filtroAve).then(listaDto => this.aves = listaDto.list as Ave[]);
  }
  
}