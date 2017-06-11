import  {  Injectable  }  from  '@angular/core';
import  {  Headers,  Http  }  from  '@angular/http';
import  'rxjs/add/operator/toPromise';
import  {  Proveedor  }  from  '../domain/Proveedor';
import  {  Dto  }  from  '../domain/Dto';
import  {  ListaDto  }  from  '../domain/ListaDto';

@Injectable()
export  class  GenericService  {
        private  headers  =  new  Headers({ 'Content-Type':  'application/json' });
        private  protocolo = 'http://';
        private  servidor =  'localhost';
        private  puerto = '8181';
        private  contextApp = '/softventory-ws';
        private  tipoServicio = '/rest';
        private  url  =  this.protocolo + this.servidor + ":" + this.puerto + this.contextApp + this.tipoServicio;
        private  descripcion: String;
        constructor(private  http:  Http)  {

        }

        /**
         * Lista todos los proveedores registrados en la base de datos.
         * @returns arreglo de proveedores registrados en base de datos.
         */
        listAll(nameDomain: String):  Promise<ListaDto>  {
                var urlListar = this.url + "/" + nameDomain + "/listar-" + nameDomain + "/";
                return  this.http.get(urlListar)
                        .toPromise()
                        .then(response  =>  response.json()  as  ListaDto)
                        .catch(this.handleError);
        }

        /**
         * Crea un nuevo proveedor.
         * @param proveedor proveedor a crear.
         * @returns el proveedor creado, con el id correspondiente.
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
