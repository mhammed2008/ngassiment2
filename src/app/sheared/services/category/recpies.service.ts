import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecpiesService {
  private _http = inject(HttpClient);
  constructor() { }

  getAllRecpies(): Observable<any>{
    return this._http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }
  getRecpie(id: string | null): Observable<any> {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
