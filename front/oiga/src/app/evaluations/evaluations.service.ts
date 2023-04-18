import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { evaluations } from './evaluations';
     
@Injectable({
  providedIn: 'root'
})
export class evaluationsService {
     
  private apiURL = "https://localhost:7219/api";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/evaluations/get')
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(evaluations:evaluations): Observable<any> {

    return this.httpClient.post(this.apiURL + '/evaluations/Save/', JSON.stringify(evaluations), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:string): Observable<any> {

    return this.httpClient.get(this.apiURL + '/evaluations/getById?id=' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update( id:string, evaluations:evaluations): Observable<any> {
    evaluations.id = id;
    return this.httpClient.put(this.apiURL + '/evaluations/Update/' , JSON.stringify(evaluations), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:string){
    return this.httpClient.delete(this.apiURL + '/evaluations/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}