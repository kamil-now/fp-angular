import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[] = [
    {
      id: '1',
      name: 'Product #1',
      description: 'Product #1 description',
      price: 1.23
    },
    {
      id: '2',
      name: 'Product #2',
      description: 'Product #2 description',
      price: 0
    },
    {
      id: '3',
      name: 'Product #3',
      description: 'Product #3 description',
      price: 3.23
    }
  ]

  getAllProducts(): Observable<Product[]> {
    return of(this._products)
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(id ? this._products.find(x => x.id === id) : undefined)
  }
}