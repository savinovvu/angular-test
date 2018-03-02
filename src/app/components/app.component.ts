import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Commentary} from '../models/comment';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  comments: Array<Commentary>;
  newCommentary: Commentary;


  constructor() {
    this.newCommentary = new Commentary();
    this.comments = [];
  }

  add(form: NgForm) {
    this.comments.unshift(this.newCommentary);
    this.newCommentary = new Commentary();
  }

  like(comment) {
    comment.likes++;
  }

}
