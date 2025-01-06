import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menu:Menu ;
  menus:Menu[]= [] ;

  constructor(private crud:CrudService) { 
    this.menu = new Menu();
  }

  ngOnInit(): void {
    
  }


  onSubmit(menu:Menu){
    menu.approved = false;
    menu.mark = 0;
    menu.reservations=[];
   this.crud.postMenus(menu).subscribe();
    
  }

}
