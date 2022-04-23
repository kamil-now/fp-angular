import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<Product[]>([
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
  ])

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  getAllProducts(): Observable<Product[]> {
    return this._products.asObservable()
  }

  getProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`/api/products/${id}`)
  }

  fetchProducts(search?: string): void {
    this._http.get<Product[]>('/api/products' + (search && search?.length > 0 ? `?q=${search}` : ''))
      .subscribe(products => this._products.next(products))
  }
}