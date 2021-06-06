import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPerson } from '../person.actions';
import { Observable } from 'rxjs';
import { Person } from '../person.model';

@Component({
  selector: 'app-my-counter2',
  templateUrl: './my-counter2.component.html',
  styleUrls: ['./my-counter2.component.css']
})
export class MyCounter2Component {

  count$: Observable<number> | undefined
  person$: Observable<Person> | undefined;


  constructor(private store: Store<{ count: number, person: Person }>) {
    this.count$ = store.select('count');
    this.person$ = store.select('person');
  }

  public async addJohn() {
    const Jonh: Person = {
      name: 'Jonh',
      age: 18
    }
    await this.store.dispatch(addPerson({ person: Jonh }));
  }

  public async addMaria() {
    const Maria: Person = {
      name: 'Maria',
      age: 9
    }
    await this.store.dispatch(addPerson({ person: Maria }));
  }

}
