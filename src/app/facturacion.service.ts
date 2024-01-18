import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 const apiUrl = 'http://pbiz.zonavirtual.com/api/Prueba/Consulta';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  //private apiUrl = 'http://pbiz.zonavirtual.com/api/Prueba/Consulta';

  constructor(private http: HttpClient) { }

  getDatosFacturacion(datosPost: any): Observable<any> {
    return this.http.post(apiUrl, datosPost);
  }

}
