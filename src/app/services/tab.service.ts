import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getListContentByIDMenu(id: any): Observable<any> {
    return this.http.get(`${environment.baseUrl}/ws_category_content.php?var_id=` + id)
      .pipe(
        tap(_ => console.log(`Content fetched: ${id}`)),
        catchError(this.handleError<any>(`Get Content id=${id}`))
      );
  }

  getArticleDetails(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/ws_detail.php?var_id=` + id).pipe(
      tap((_) => console.log(`Student fetched: ${id}`)),
      catchError(this.handleError<any>(`Get student id=${id}`))
    );
  }

  getAlsoLike(id_menu: any, id_content: any){
    return this.http.get<any>(`${environment.baseUrl}/ws_also_like.php?var_id_menu=`+id_menu+`&var_id_content=`+id_content)
    .pipe(
      tap(_ => console.log(`Also like fetched id_content: ${id_content}`)),
        catchError(this.handleError<any>(`Get Content id_content=${id_content}`))
    );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
}
