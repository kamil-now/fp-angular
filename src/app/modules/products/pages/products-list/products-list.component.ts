import { Component } from '@angular/core'
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [
    {
      name:  'Product #1',
      description: 'Product #1 description',
      price: 1.23
    },
    {
      name:  'Product #2',
      description: 'Product #2 description',
      price: 0
    },
    {
      name:  'Product #3',
      description: 'Product #3 description',
      price: 3.23
    }
  ]
}
