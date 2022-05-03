import { Injectable } from '@angular/core'
import { BehaviorSubject, combineLatest, first, map, Observable } from 'rxjs'
import { Product } from 'src/app/models/product'
import { ProductService } from './product.service'

const CART_KEY = 'app-cart'
type Cart = { [productId: string]: number }

@Injectable({
  providedIn: 'root'
})
export class CartService {

  get size$(): Observable<number> {
    return this._size.asObservable()
  }

  get products$(): Observable<Product[]> {
    return this._products.asObservable()
  }

  get totalPrice$(): Observable<number> {
    return this.products$.pipe(
      map(product =>
        product
          .map(x => this.productPrice(x))
          .reduce((sum, price) => sum += price, 0)
      )
    )
  }

  private readonly _products = new BehaviorSubject<Product[]>([])

  private readonly _cart: Cart = JSON.parse(localStorage.getItem(CART_KEY) ?? '{}') as Cart
  private readonly _cartProductsIds = Object.keys(this._cart)
  private readonly _size = new BehaviorSubject(
    this._cartProductsIds.reduce((sum, id) => sum += this._cart[id], 0)
  )


  constructor(
    private readonly _productsService: ProductService
  ) {
    combineLatest(
      this._cartProductsIds.map(id => this._productsService.getProductById(id))
    )
      .pipe(first())
      .subscribe(products => this._products.next(products))
  }

  add(product: Product): void {
    if (product.id) {
      if (this._cart[product.id] !== undefined) {
        this._cart[product.id]++
      } else {
        console.log(this._cart[product.id])
        this._cart[product.id] = 1
        this._products.next([...this._products.value, product])
      }
      this._size.next(this._size.value + 1)
      localStorage.setItem(CART_KEY, JSON.stringify(this._cart))
    }
  }

  remove(product: Product): void {
    if (product.id && this._cart[product.id] && this._cart[product.id] > 0) {
      this._cart[product.id]--
      this._size.next(this._size.value - 1)
      localStorage.setItem(CART_KEY, JSON.stringify(this._cart))
    }
  }

  productCount(id: string): number {
    return this._cart[id] ?? 0
  }

  productPrice(product: Product): number {
    return product.price * this.productCount(product.id!)
  }
}