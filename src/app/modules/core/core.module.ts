import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { PaginationModule } from 'node_modules/ngx-bootstrap/pagination'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ]
})
export class CoreModule { }
