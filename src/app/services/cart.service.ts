import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../domains/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  // private total = signal<number>;

  getCart(){
    return this.cart.asReadonly();
  }

  addToCart(product:Product){
    this.cart.update(prevState => [...prevState, product]);
  }

  total = computed(() =>{
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  });

  clearCart(){
    this.cart.set([]);
  }

  constructor() { }
}
