import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProdLineComponent } from './components/prod-line/prod-line.component';
import { HomeComponent } from './pages/home/home.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { CartComponent } from './components/cart/cart.component';
import { ListaDesejosComponent } from './components/lista-desejos/lista-desejos.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormInputComponent } from './components/form-input/form-input.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProdLineComponent,
    HomeComponent,
    DropdownComponent,
    GameInfoComponent,
    CartComponent,
    ListaDesejosComponent,
    MenuComponent,
    CartPageComponent,
    FaleConoscoComponent,
    WishListComponent,
    FavoritosComponent,
    RegisterComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
