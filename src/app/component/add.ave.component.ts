import { Component, OnInit  } from '@angular/core';
import { Ave } from '../domain/Ave';
import { Pais } from '../domain/Pais';
import { Dto } from '../domain/Dto';
import { Location } from '@angular/common';
import { GenericService } from '../service/Generic.service';

@Component({
    selector: 'add-ave',
    templateUrl: '../views/add.ave.component.html',
    moduleId: module.id
})
export class AddAveComponent implements OnInit{

    errorMessage: String = undefined;
    succesMessage: String = undefined;

    constructor(private location: Location, private genericService: GenericService) { }
    ave: Ave = { codigo: undefined, nombreComun: undefined, nombreCientifico: undefined, paises: undefined};
    paises: Pais[];
    paisesAdded: Pais[]=[];
    paisSeleccionado: String;

    ngOnInit(): void {
        this.getPaises();
    }

    /**
     * Agrega el pais seleccionado a la lista de paises del Ave en gestion. 
     * @param pais 
     */
    onChange(idPais:String):void{
        this.addPais(this.getPais(idPais));
    }

    /**
     * se obtiene una instancia de Pais por el codigo de este.
     * @param idPais 
     */
    getPais(idPais:String):any{
        for(var i = 0; i < this.paises.length ; i++){
            if(idPais === this.paises[i].codigo){
                return this.paises[i];
            }
        }
        return null;
    }
    /**
     * Se obtiene la lista de paises que existe en base de datos.
     */
    getPaises(): void{
        this.genericService.listAll("pais").then(listaDto => this.paises = listaDto.list as Pais[]);
    }
    /**
     * Se agrega un pais a la lista de paises de donde pertenece el ave que se va a registrar.
     * @param pais, pais a agregar a la lista de paises de donde pertenece el ave que se va a registrar.
     */
    addPais(pais:Pais): void{
        this.paisesAdded.push(pais);
    }
    /**
     * Se elimina un pais de la lista de paises de donde pertenece el ave que se va a registrar.
     * @param pais, pais a eliminar de la lista de paises de donde pertenece el ave que se va a registrar.
     */
    deletePais(pais: Pais):void{
        for(var i = 0; i < this.paisesAdded.length ; i++){
            if(pais.codigo === this.paisesAdded[i].codigo){
                this.paisesAdded.splice(i, 1);
                break;
            }
        }
    }
    /**
     * Valida si un pais fue agregado a la lista de paises relacionados al ave en gestion.
     * @param pais, pais a validar.
     */
    isPaisAdded(pais: Pais): boolean{
        for(var i = 0; i < this.paisesAdded.length ; i++){
            if(pais.codigo === this.paisesAdded[i].codigo){
                return true;;
            }
        }
        return false;
    }
    /**
     * Regresamos a la vista (route) anterior.
     */
    goBack(): void {
        this.location.back();
    }
    /**
     * Registra en base de datos el ave digitado en el formulario
     */
    registrar(): void {
        this.ave.paises = this.paisesAdded;
        this.genericService.create(this.ave, "ave").then(ave => this.succes(ave));
        
    }

    /**
     * Se obtiene el objeto ave al terminar el registro.
     * @param dto 
     */
    succes(dto: Dto): void {
        if(-1 == dto.codigo){
            this.errorMessage=dto.descripcion;
        }else{
            this.ave = dto.object as Ave;
            this.succesMessage = dto.descripcion;
            this.paisesAdded=[];
            this.ave = { codigo: undefined, nombreComun: undefined, nombreCientifico: undefined, paises: undefined};
        }
        
    }
}