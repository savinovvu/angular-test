import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Person} from '../../model/model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  memberList: Array<Person> = [];
  query: string;

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.search;
  }

  getData() {
    return this.httpClient.get('app/data/people.json').toPromise();
  }

  searchQuery(query: string): Promise<any> {
    if (!query || query === '*') {
      query = '';
    } else {
      query = query.toLowerCase();
    }
    return this.getData().then((data: any) => {
      let results: Array<Person> = [];
      data.map(item => {
        if (JSON.stringify(item).toLowerCase().includes(query)) {
          results.push(item);
        }
      });
      return results;
    });
  }

  search(): void {
    this.searchQuery(this.query)
      .then(results => this.memberList = results);
  }

  viewDetails(id: number) {
    this.router.navigate(['/person'], `${id}`);
  }
}
