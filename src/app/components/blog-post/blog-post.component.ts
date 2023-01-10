import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/Models/blogPost';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  constructor(public ui: UiService) { }

  @Input() blogPost: BlogPost | undefined

  // blog: BlogPost = new BlogPost(0, 'Zoddy', 'Jan 10, 2023', '', 14, 'Test Blog Post', 'My first blog post how awesome is this?', '', [])

}