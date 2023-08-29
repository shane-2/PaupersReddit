import { Component } from '@angular/core';
import { Aww, AwwData } from 'src/app/models/reddit-result';
import { RedditService } from 'src/app/services/reddit.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  Posts: Aww = {} as Aww;

  constructor(private awwPosts:RedditService){}

  ngOnInit(){

    this.awwPosts.getAll().subscribe((response:Aww)=>{      
      console.log(response);
      //saving response in a variable
      this.Posts = response;
    } );


}
}
