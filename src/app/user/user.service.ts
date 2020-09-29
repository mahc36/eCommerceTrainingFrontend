import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUserServiceUrl = 'http://localhost:8383/user';
    private createUserUrl = this.baseUserServiceUrl + '/create';
    private findAllUsersUrl = this.baseUserServiceUrl + '/findAllUsers';

    constructor(private http: HttpClient) { }

    createUser(user: IUser): Observable<IUser[]> {
      return this.http.post<IUser[]>(this.createUserUrl, user)
        .pipe(
          tap( ()  => console.log('User creation done')),
          catchError(this.handleError)
        );
    }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.findAllUsersUrl)
          .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
