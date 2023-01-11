import { Component } from '@angular/core';
import { Account } from 'src/app/Models/account';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  constructor(public ui: UiService) { }

  account: Account = new Account(0, 'Jareth', 'myEmail', 'myPass', [], [], [])
  createPost = false

  title = ''
  body = ''
  photo = ''

  viewCreatePost() {
    if (this.createPost == false) {
      this.createPost = true
    } else {
      this.createPost = false
    }
  }
}
