import { Component } from '@angular/core'
import { AuthService } from 'src/app/modules/core/services/auth.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  readonly navigation = [
    {
      link: '/home',
      title: 'Home'
    },
    {
      link: '/products',
      title: 'Products'
    },
    {
      link: '/contact',
      title: 'Contact'
    },
    {
      link: '/admin',
      title: 'Admin'
    }
  ]

  constructor(
    readonly authService: AuthService
  ) {
  }
}
