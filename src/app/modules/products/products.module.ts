import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ProductDetailsComponent } from './pages/product-details/product-details.component'
import { ProductsListComponent } from './pages/products-list/products-list.component'
import { ProductsRoutingModule } from './products-routing.module'


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class ProductsModule { }
