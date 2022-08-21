import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS_MOCK } from '../products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 find():Product[]{return PRODUCTS_MOCK;}
}
