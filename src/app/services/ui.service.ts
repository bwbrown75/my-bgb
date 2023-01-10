import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { Account } from '../Models/account';
import { BlogPost } from '../Models/blogPost';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private showAccount = false
  private showHeader = true
  private showFeed = true
  private showBlog = false
  private showMessages = false


  public accountView(): boolean {
    return this.showAccount
  }

  public getAccountView() {
    this.showAccount = true
  }

  public headerView(): boolean {
    return this.showHeader
  }

  public logOut() {
    this.showAccount = false
    this.showBlog = false
    this.showMessages = false
    this.showFeed = true
    this.showHeader = true
  }

  public FeedView(): boolean {
    return this.showFeed
  }

  public showFeedView() {
    this.showFeed = true
    this.showBlog = false
    this.showMessages = false
  }

  public blogView(): boolean {
    return this.showBlog
  }

  public showBlogView() {
    this.showFeed = false
    this.showMessages = false
    this.showBlog = true
  }

  public messageView(): boolean {
    return this.showMessages
  }

  public showMessageView() {
    this.showMessages = true
  }

  private showError(message: string): void {
    this.snackBar.open(message, undefined, { duration: 2000 })
  }

  public allBlogs: BlogPost[] = [
    new BlogPost(0, 'Zoddy', 'Jan 10, 2023', '', 14, 'Test Blog Post', 'My first blog post, how awesome is this?', '', []),
    new BlogPost(1, 'Zoddy', 'Jan 11, 2023', '', 6, 'Test Post Two!', 'My second blog post!!', '', [])
  ]
  public $allBlogs: Subject<BlogPost[]> = new Subject
  public allUsers: Account[] = []
  public $allUsers: Subject<Account[]> = new Subject
  public loggedAccount?: Account

  public getAllFeed() {
    this.http.get<BlogPost[]>('http://localhost:8080/blogPost')
      .pipe(take(1))
      .subscribe(
        data => {
          this.allBlogs = data;
          this.$allBlogs.next(data);
        }
      )

  }

  public registerUser(username: string, email: string, password: string) {
    this.http.post<Account>('http://localhost:8080/account',
      {
        username: username,
        email: email,
        password: password
      }).pipe(take(1))
      .subscribe({
        next: () => {
          this.logIn(email, password)
        },
        error: () => {
          this.showError('Failed to register')
        }
      })
  }

  public logIn(email: string, password: string) {
    this.http.get<Account>(`http://localhost:8080/account?email=${email}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: (account) => {
          this.loggedAccount = account
        },
        error: () => {
          this.showError('Failed to Sign In')
        }
      })
  }

}


