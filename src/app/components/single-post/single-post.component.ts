import { Component, Input } from '@angular/core';
import { Child } from 'src/app/models/reddit-result';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
@Input() DisplayPost:Child={} as Child;
}
