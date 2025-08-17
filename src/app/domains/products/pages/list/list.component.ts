import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '../../../../services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  productList = signal<Product[]>([]);
  // cart = signal<Product[]>([]); // señal que guarda los producto que el usuario seleccione

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  constructor(){
  }

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next:(products) => {
        this.productList.set(products);
      },
      error:() => {
      }
    })
  }

  fromChild(event: string){
    console.log('estamos en el padre');
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log('estamos en el padre');
  }


}
