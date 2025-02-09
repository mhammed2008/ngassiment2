import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recpies } from '../../interface/recpies';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _httpClinte = inject(HttpClient);

  constructor() { }

  getCategorys(): Observable<any>{
    return this._httpClinte.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  }

  getRecpiesByCategory(category: string | null): Observable<any> {
    return this._httpClinte.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }
}
