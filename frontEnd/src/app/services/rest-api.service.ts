import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Create a new item
  createItem(link: string, item: Product): Observable<Product> {
    return this.http
      .post<Product>(link, JSON.stringify(item))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single Product data by ID
  getItem(link: string, id: string): Observable<Product> {
    return this.http
      .get<Product>(link + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Products data
  getList(link: string): Observable<Product> {
    return this.http
      .get<Product>(link)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(link: string, id: string, item: Product): Observable<Product> {
    return this.http
      .put<Product>(link + '/' + id, JSON.stringify(item))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(link: string, id: string) {
    return this.http
      .delete<Product>(link + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  //   get(link: string) {
  //     return this.http.get(link).toPromise();
  //   }

  //   getOne(link: string, id: string) {
  //     return this.http.get(link + '/' + id).toPromise();
  //   }

  post(link: string, body: any) {
    return this.http.post(link, body).toPromise();
  }

  //   put(link: string, id: string, body: any) {
  //     return this.http.put(link + '/' + id, body).toPromise();
  //   }

  //   delete(link: string, id: string) {
  //     return this.http.delete(link + '/' + id).toPromise();
  //   }
}
