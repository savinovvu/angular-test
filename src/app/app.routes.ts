import {RouterModule, Routes} from '@angular/router';
import {View1Component} from './components/view1/view1.component';
import {View2Component} from './components/view2/view2.component';
import {MembersComponent} from './components/members/members.component';
import {PersonComponent} from './components/person/person.component';

const routes: Routes = [
  {path: '', redirectTo: 'view1', pathMatch: 'full'},
  {path: 'view1', component: View1Component},
  {path: 'view2', component: View2Component},
  {path: 'members', component: MembersComponent},
  {path: '/person/:id', component:PersonComponent}
];

export const routing = RouterModule.forRoot(routes);
