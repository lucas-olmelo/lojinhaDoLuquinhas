import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeComponent } from './pages/home/home.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';

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
    component: CartPageComponent
  },
  {
    path: 'faleconosco',
    component: FaleConoscoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
