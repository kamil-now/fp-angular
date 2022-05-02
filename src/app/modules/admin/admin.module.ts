import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component'

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminMessagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
