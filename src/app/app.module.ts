import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomComponent } from './components/hom/hom.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: 'home', component: HomComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./modules/reservation/reservation.module').then((m) => m.ReservationModule)  },

    {
      path: 'menu',
      loadChildren: () =>
        import('./modules/menu/menu.module').then((m) => m.MenuModule)  },
  
  { path: '**', component: NotFoundComponent },
];





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomComponent,
    FooterComponent,
    NotFoundComponent,
    MenuComponent,
    MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
