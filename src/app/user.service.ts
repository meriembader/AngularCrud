import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000";
@Injectable({

  providedIn: 'root'
})
export class UserService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  

  constructor(private http: HttpClient) { }
    
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(): Observable<any> {
    const url = `${apiUrl}/users`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    }
    postData(data): Observable<any> {
      const url = `${apiUrl}/users`;
      return this.http.post(url,data, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
      }
  
      deleteData(id): Observable<any> {
      const url = `${apiUrl}/users/`+id;
      return this.http.delete(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
      }
  
      putData(id,data): Observable<any> {
        const url = `${apiUrl}/users/`+id;
        return this.http.put(url,data, httpOptions).pipe(
          map(this.extractData),
          catchError(this.handleError));
        }

}
