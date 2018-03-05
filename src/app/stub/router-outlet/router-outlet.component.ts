import {Component, Injectable, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';

@Component({
  selector: 'router-outlet',
  templateUrl: './router-outlet.component.html',
  styleUrls: ['./router-outlet.component.css']
})
export class RouterOutletStubComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@Injectable
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {
  }
}
