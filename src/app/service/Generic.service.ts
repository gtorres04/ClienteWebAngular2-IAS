import  {  Injectable  }  from  '@angular/core';
import  {  Headers,  Http  }  from  '@angular/http';
import  'rxjs/add/operator/toPromise';
import  {  Dto  }  from  '../domain/Dto';
import  {  ListaDto  }  from  '../domain/ListaDto';

@Injectable()
export  class  GenericService  {
        private  headers  =  new  Headers({ 'Content-Type':  'application/json' });
        private  protocolo = 'http://';
        private  servidor =  'localhost';
        private  puerto = '8181';
        private  contextApp = '/pruebatecnica-ws';
        private  tipoServicio = '/rest/api';
        private  url  =  this.protocolo + this.servidor + ":" + this.puerto + this.contextApp + this.tipoServicio;
        private  descripcion: String;
        constructor(private  http:  Http)  {

        }

        /**
         * Lista todas las entidades del dominio registrados en la base de datos.
         * @returns arreglo de objetos del dominio registrados en base de datos.
         */
        listAll(nameDomain: String):  Promise<ListaDto>  {
                var urlListar = this.url + "/" + nameDomain + "/list";
                return  this.http.get(urlListar)
                        .toPromise()
                        .then(response  =>  response.json()  as  ListaDto)
                        .catch(this.handleError);
        }

        /**
         * Crea una nueva antidad del dominio.
         * @param proveedor entidad del dominio a crear.
         * @returns la entidad del dominio creada, con el id correspondiente.
         */
        create(domain:  any,  nameDomain: String):  Promise<Dto>  {
                var urlCreate = this.url + "/" + nameDomain + "/registrar-" + nameDomain;
                var  data = JSON.stringify(domain);
                return  this.http
                        .post(urlCreate,  data,  {  headers:  this.headers  })
                        .toPromise()
                        .then(response  =>  response.json()  as  Dto)
                        .catch(this.handleError);
        }

        /**
         * Eliminar registra de la base de datos.
         * @param domain, dominio a eliminar.
         * @param nameDomain, nombre en cadena del dominio.
         */
        delete(domain:  any,  nameDomain: String): Promise<Dto>{
            var urlEliminar = this.url + "/" + nameDomain + "/eliminar-" + nameDomain;
                var  data = JSON.stringify(domain);
                return  this.http
                        .post(urlEliminar,  data,  {  headers:  this.headers  })
                        .toPromise()
                        .then(response  =>  response.json()  as  Dto)
                        .catch(this.handleError);
        }
        private  handleError(error:  any):  Promise<any>  {
                console.error('An error occurred',  error); // for demo purposes only
                return  Promise.reject(error.message  ||  error);
        }
}
