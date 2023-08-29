import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "Home", component:AppComponent},
  {path: "Posts", component: PostsComponent},
  {path:"Posts", component: SinglePostComponent},
  
  //default, just got to website
  {path:"", redirectTo: "/Home", pathMatch: "full"},

  //page not found
  {path:"**", redirectTo: "/Posts", pathMatch: "full"}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }