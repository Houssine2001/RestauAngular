import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Menu } from '../model/Menu';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }

  postMenus(menu: Menu) {
    return this.http.post('http://localhost:3000/menus', menu);
  }


  getMenusById(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/menus/' + id);
  }


 
  updateMenu(menu:Menu) {
    return this.http.put('http://localhost:3000/menus/' + menu.id, menu);
  }


  
  getMenusByUserId(userId: number): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl).pipe(
      map((menus: Menu[]) => menus.filter((menu: Menu) => menu.reservations.includes(userId)))
    );
  }

}
