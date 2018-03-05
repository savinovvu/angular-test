import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;

  constructor(private  httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getPerson(id).then((pers:Person) => {
        this.person = pers;
      });
    });
  }


  getData() {
    return this.httpClient.get('app/data/people.json')
      .toPromise();
  }

  private getPerson(id: number) {
    return this.getData().then((data: any) => data.find(member => member.id === id));

  }
}
