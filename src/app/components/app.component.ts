import { Component } from '@angular/core';
import {browser} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls:['./app.component.css']
})
export class AppComponent  {
  name = 'Angular';
  items: Array<string>;

  constructor(){
    this.items = ['test','execute','refactor'];
  }

  add(s: string) {
    this.items.push(s);
  }
}
