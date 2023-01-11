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
    new BlogPost(0, 'Zoddy', Date.now(), Date.now(), 14, 'Test Blog Post', 'My first blog post, how awesome is this?', '', []),
    new BlogPost(1, 'Zoddy', Date.now(), Date.now(), 6, 'Test Post Two!', 'My second blog post!!', '', [])
  ]
  public $allBlogs: Subject<BlogPost[]> = new Subject
  public allUsers: Account[] = []
  public $allUsers: Subject<Account[]> = new Subject
  public loggedAccount: Account = new Account(0, '', '', '', [], [], [])

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

  public registerUser(userName: string, email: string, password: string) {
    this.http.post('http://localhost:8080/account',
      {
        userName: userName,
        email: email,
        password: password
      }).pipe(take(1))
      .subscribe({
        next: () => {
          this.logIn(email, password)
        },
        error: () => {
          this.showError('Failed to Register')
        }
      })
  }

  public logIn(email: string, password: string) {
    this.http.get<Account>(`http://localhost:8080/account?email=${email}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: account => {
          this.loggedAccount = account
          this.loggedIn()
        },
        error: () => {
          this.showError('Failed to Sign In')
        }
      })
  }

  public loggedIn() {
    this.showAccount = true
    this.showHeader = false
  }

  public addNewBlog(title: string, body: string, photo: string) {
    this.http.post('http://localhost:8080/blogPost',
      {
        blogTitle: title,
        bodyText: body,
        photo: photo,
        userName: this.loggedAccount.userName,
        dateCreated: Date.now(),
      }).pipe(take(1))
      .subscribe({
        next: () => {
          this.getAllFeed()
        },
        error: () => {
          this.showError('Failed to Post')
        }
      })
  }

}


