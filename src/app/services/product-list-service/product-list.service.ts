import { Injectable } from '@angular/core';
import { Product } from '../../models/product-models';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private apiUrl = 'https://fakestoreapi.com/products/category/electronics';
  async fetchProductList(): Promise<any[]> {
    console.log('Fetching products from API...');
    try {
      const res = await fetch(this.apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: any[] = await res.json();

      const productList: Product[] = data.map((product: any) => {
        return {
          ...product,
          stock: product?.rating?.count || 0,
        };
      });
      return productList;
    } catch (error) {
      console.error('Failed to fetch product list:', error);
      return Promise.reject('Unable to load products. Please check network connection.');
    }
  }
  constructor() {}
}
