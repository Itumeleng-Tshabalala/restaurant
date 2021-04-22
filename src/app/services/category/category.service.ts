import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CATEGORIES } from 'src/app/structure/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(){
    return of(CATEGORIES);
  }
}
