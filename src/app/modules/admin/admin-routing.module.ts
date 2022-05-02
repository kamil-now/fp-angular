import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component'

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: 'messages',
    component: AdminMessagesComponent
  },
  {
    path: 'products',
    redirectTo: '/products'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
