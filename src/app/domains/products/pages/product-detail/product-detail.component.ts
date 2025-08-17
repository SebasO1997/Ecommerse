import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


  @Input() id?: string;
  product = signal<Product|null>(null);
  cover =signal('');  // signal para cambio de imagen
  private productService = inject(ProductService);
  selectedImage: string | null = null;


  ngOnInit(){
    if(this.id){
      this.productService.getProductDetail(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        }
      });
    }
  }

  // para cambiar de imagen
  changeCover(newImg:string){
    this.cover.set(newImg);
  }

}
