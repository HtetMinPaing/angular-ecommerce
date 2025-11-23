import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/product-models';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductListService } from '../../services/product-list-service/product-list.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductList {
  products = signal<Product[]>([]);

  productService = inject(ProductListService);

  
  async ngOnInit() {
    const productList: Product[] = await this.productService.fetchProductList();
    this.products.set(productList)
  }
}
