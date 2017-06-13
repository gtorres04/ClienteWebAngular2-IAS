import  {  Injectable  }  from  '@angular/core';
import  {  Headers,  Http  }  from  '@angular/http';
import  'rxjs/add/operator/toPromise';
import  {  Dto  }  from  '../domain/Dto';
import  {  ListaDto  }  from  '../domain/ListaDto';

@Injectable()
export  class  AveService  {
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

        findByNameAndZone(domain: any): Promise<ListaDto>{
            var urlCreate = this.url + "/ave/listByNomeAndZone";
                var  data = JSON.stringify(domain);
                return  this.http
                        .post(urlCreate,  data,  {  headers:  this.headers  })
                        .toPromise()
                        .then(response  =>  response.json()  as  ListaDto)
                        .catch(this.handleError);
        }
       
        private  handleError(error:  any):  Promise<any>  {
                console.error('An error occurred',  error); // for demo purposes only
                return  Promise.reject(error.message  ||  error);
        }
}
