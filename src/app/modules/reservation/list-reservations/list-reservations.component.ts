import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {
  Listemenu: Menu[] = [];
  userId: number = 1; // Assuming the logged-in user has ID 1



  constructor(private servmen: CrudService) { }

  
  ngOnInit(): void {
    this.servmen.getMenusByUserId(this.userId).subscribe((data: Menu[]) => {
      this.Listemenu = data;
    });
  }

}
