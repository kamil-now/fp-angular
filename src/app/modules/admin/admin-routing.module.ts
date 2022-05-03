import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component'
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component'
import { AdminProductAddComponent } from './pages/admin-product-add/admin-product-add.component'
import { AdminProductEditComponent } from './pages/admin-product-edit/admin-product-edit.component'

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
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products/:id/edit',
    component: AdminProductEditComponent
  },
  {
    path: 'products/add',
    component: AdminProductAddComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
