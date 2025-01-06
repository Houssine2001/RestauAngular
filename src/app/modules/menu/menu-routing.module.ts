import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuDetailsComponent } from 'src/app/components/menu-details/menu-details.component';

const routes: Routes = [
  { path: 'add', component: AddMenuComponent },
  {path:'details/:id',component:MenuDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
