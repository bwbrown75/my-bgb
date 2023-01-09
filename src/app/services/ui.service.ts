import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { Account } from '../Models/account';
import { blogPost } from '../Models/blogPost';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(public http: HttpClient) { }

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

  public allBlogs: blogPost[] = []
  public $allBlogs: Subject<blogPost[]> = new Subject
  public allUsers: Account[] = []
  public $allUsers: Subject<Account[]> = new Subject

  public getAllFeed() {
    this.http.get<blogPost[]>('http://localhost:8080/blogPost')
      .pipe(take(1))
      .subscribe(
        data => {
          this.allBlogs = data;
          this.$allBlogs.next(data);
        }
      )

  }
}


