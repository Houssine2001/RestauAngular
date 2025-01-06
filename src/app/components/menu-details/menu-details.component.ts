import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  menu:Menu= new Menu();
  nemark: number = 0;
  menuId: string | null = null;

  constructor(private serv:CrudService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.menuId = this.route.snapshot.paramMap.get('id');
    this.serv.getMenusById(this.menuId).subscribe((data:any)=>this.menu=data);
  }

  updateMenu(menu:Menu){
    if(this.menu.mark==0){
      this.menu.mark = this.nemark;
      this.serv.updateMenu(menu).subscribe();

  }else{
    this.menu.mark = (this.menu.mark + this.nemark)/2;
    this.serv.updateMenu(menu).subscribe();

  }
}


}