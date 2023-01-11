import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public ui: UiService) { }

  userName: string = ''
  email: string = ''
  password: string = ''

  showRegister = false
  showLogin = false

  viewRegister() {
    if (this.showRegister == false) {
      this.showRegister = true
    } else {
      this.showRegister = false
    }
    this.showLogin = false
  }

  viewLogin() {
    if (this.showLogin == false) {
      this.showLogin = true
    } else {
      this.showLogin = false
    }
    this.showRegister = false
  }

}
