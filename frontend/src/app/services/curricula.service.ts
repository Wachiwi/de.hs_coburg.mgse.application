import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CurriculumMeta } from '../shared/models/curriculum-meta';
import { catchError } from 'rxjs/operators';
import { Curriculum } from '../shared/models/curriculum';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CurriculaService {

  private curriculaUrl = 'curricula';

  constructor(private http: HttpClient) { }

  getCurriculaMeta (): Observable<CurriculumMeta[]> {
    return this.http.get<CurriculumMeta[]>(`${API_URL}/${this.curriculaUrl}`)
      .pipe(
        catchError(this.handleError( 'getCurriculaMeta', []))
      );
  }

  getCurriculum (id: number): Observable<Curriculum> {
    const url = `${API_URL}/${this.curriculaUrl}/${id}`;
    return this.http.get<Curriculum>(url)
      .pipe(
        catchError(this.handleError<Curriculum>(`getCurriculum id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
