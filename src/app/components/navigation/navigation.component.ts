import { Component } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigation = [
    {
      link: '/home' ,
      title: 'Home'
    },
    {
      link: '/products' ,
      title: 'Products'
    },
    {
      link:'/contact',
      title: 'Contact'
    }
  ]
}
