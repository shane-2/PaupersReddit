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
subreddit:string="aww";
status:string ="";

  constructor(private awwPosts:RedditService){}

  ngOnInit(){
    this.CallApi();
  }

    CallApi():void{
      this.status="loading";
      this.awwPosts.getAll(this.subreddit).subscribe((response:Aww)=>{      
        
        //saving response in a variable
        this.Posts = response;
        this.Posts.data.children.splice(10); //this line cuts off to ten posts
        this.status="";
      }, (err)=>{
        
        this.status = "Couldn't find this Subreddit"
      });
}
}
