import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = new BehaviorSubject<Product[]>([])

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