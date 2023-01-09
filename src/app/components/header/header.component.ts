import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public service: UiService) { }

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
  }

}
