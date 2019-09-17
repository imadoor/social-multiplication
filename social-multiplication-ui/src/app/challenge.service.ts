import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChallengeQuestion } from './challenge-question';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private questionVariablesUrl;

  constructor(private http: HttpClient) { 
    this.questionVariablesUrl = 'http://localhost:8080/multiplications/random';
  }

  public getChallengeVariables(): Observable<ChallengeQuestion> {

    return this.http.get<ChallengeQuestion>(this.questionVariablesUrl).pipe(
      catchError(this.handleError<ChallengeQuestion>('getChallangeVariables'))
    );
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
