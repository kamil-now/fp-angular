import { HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _total = new BehaviorSubject<number>(0)
  private _products = new BehaviorSubject<Product[]>([])

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  getTotal(): Observable<number> {
    return this._total.asObservable()
  }

  getAllProducts(): Observable<Product[]> {
    return this._products.asObservable()
  }

  getProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`/api/products/${id}`)
  }

  fetchProducts(page?: number, limit?: number, search?: string): void {
    const queryParams: { [key: string]: string } = {}
    queryParams['_page'] = `${page ?? 0}`

    if (search && search?.length > 0) {
      queryParams['q'] = search
    }
    if (limit && limit > 0) {
      queryParams['_limit'] = `${limit}`
    }

    const params = Object.keys(queryParams)
    this._http.get<Product[]>(
      '/api/products' + `?${params.map(key => `${key}=${queryParams[key]}`).join('&')}`,
      { observe: 'response' }
    ).subscribe((res: HttpResponse<Product[]>) => {
      const total = Number(res.headers.get('x-total-count'))
      if (total !== NaN)
        this._total.next(total)
      this._products.next([...res.body!])
    })
  }
}