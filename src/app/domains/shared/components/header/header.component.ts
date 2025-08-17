import { Component, computed, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true);

  private cartService = inject(CartService);
  cart = this.cartService.getCart();
  total = this.cartService.total;

  constructor(){

  }

  toogleSideMenu(){
    console.log(this.cart);
    this.hideSideMenu.update(prevState => !prevState); // cambio el estado true/false
  }



}
