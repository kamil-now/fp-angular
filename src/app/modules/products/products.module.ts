import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { PaginationModule } from 'node_modules/ngx-bootstrap/pagination'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { ProductsListComponent } from './pages/products-list/products-list.component'
import { ProductsFilterComponent } from './products-filter/products-filter.component'
import { ProductsRoutingModule } from './products-routing.module'


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ProductsFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    PaginationModule
  ]
})
export class ProductsModule { }
