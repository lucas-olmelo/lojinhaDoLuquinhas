import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'carrinho',
    component: CartPageComponent
  },
  {
    path: 'favoritos',
    component: FavoritosComponent
  },
  {
    path: 'faleconosco',
    component: FaleConoscoComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
