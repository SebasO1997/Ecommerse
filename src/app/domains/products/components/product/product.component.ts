import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLink,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // @Input({required:true}) img: string = '';
  // @Input({required:true}) price: number = 0;
  // @Input({required:true}) title: string = '';
  // img = 'https://picsum.photos/640/640?r=' + Math.random();

  @Input({required:true}) product!:Product


  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('click form child');
    this.addToCart.emit(this.product); // -> producto que quiero agregar al carrito
  }

}
