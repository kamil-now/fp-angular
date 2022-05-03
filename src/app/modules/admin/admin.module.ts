import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component'

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminMessagesComponent,
    AdminProductFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
