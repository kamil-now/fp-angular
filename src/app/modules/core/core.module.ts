import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AuthModule } from '@auth0/auth0-angular'
import { PaginationModule } from 'node_modules/ngx-bootstrap/pagination'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    AuthModule.forRoot({
      domain: environment.auth0domain,
      clientId: environment.auth0clientId
    }),
  ]
})
export class CoreModule { }
