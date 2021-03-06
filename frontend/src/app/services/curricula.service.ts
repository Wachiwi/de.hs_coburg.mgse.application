import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CurriculumMeta} from '../shared/models/curriculum-meta';
import {catchError, tap} from 'rxjs/operators';
import {Curriculum} from '../shared/models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculaService {

  private curriculaUrl = 'api/curricula';

  constructor(private http: HttpClient) { }

  getCurriculaMeta (): Observable<CurriculumMeta[]> {
    return this.http.get<CurriculumMeta[]>(this.curriculaUrl)
      .pipe(
        tap(curriculaMeta => console.log(`fetched curriculum meta objects`)),
        catchError(this.handleError( 'getCurriculaMeta', []))
      );
  }

  getCurriculum (id: number): Observable<Curriculum> {
    const url = `${this.curriculaUrl}Complete/${id}`; // TODO: remove "Complete from id template string
    return this.http.get<Curriculum>(url).pipe(
      tap( curriculum => console.log(`fetched curriculum id=${id}`)),
      catchError(this.handleError<Curriculum>(`getCurriculum id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption (Snackbar)
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
