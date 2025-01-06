import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {
  listMenus!: Menu[];
  menu!: Menu;
   idUser:number=1;
  
  constructor(private crud:CrudService) { }

  ngOnInit(): void {
    this.menu= new Menu();
      //get all menus
      this.crud.getMenus().subscribe((data: Menu[]) => {
        this.listMenus = data;
      });
    }

Rserve(menu:Menu){
  this.menu=menu;
  this.menu.reservations.push(this.idUser);
  this.crud.updateMenu(this.menu).subscribe();   
  }

}
