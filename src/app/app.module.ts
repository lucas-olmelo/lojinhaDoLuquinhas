import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
