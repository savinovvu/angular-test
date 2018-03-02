import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments: Array<string>;

  constructor() {
    this.comments = ['a sample comment', 'Second comment', 'Third comment'];
  }

  add(comment: string) {
    this.comments.unshift(comment);
  }
}
