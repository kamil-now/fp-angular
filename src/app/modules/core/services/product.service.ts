import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllproducts(): Observable<Product[]>{
    throw new Error('not implemented')
  } 
  
  getProductById(): Observable<Product[]>{
    throw new Error('not implemented')
  } 
}