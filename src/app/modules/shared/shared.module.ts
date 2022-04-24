import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormErrorsComponent } from './components/form-errors/form-errors.component'
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component'

@NgModule({
  declarations: [
    FormErrorsComponent,
    ProductsCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormErrorsComponent,
    ProductsCarouselComponent
  ]
})
export class SharedModule { }
