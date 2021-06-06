import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { Person } from '../person.model';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number> | undefined;
  person$: Observable<any> | undefined;

  data: any;


  constructor(private store: Store<{ count: number, person: Person }>) {


  }

  ngOnInit() {
    this.count$ = this.store.select('count');
    // this.person$ = this.store.select('person');
    this.store.select('person').subscribe(val => this.data = val);

  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  async person() {

    const person:Person = this.data.person;
    console.log(person.name);
    
    // let name = await this.person$?.subscribe(val => {
    //   // console.log(val);
    //   return val.name;
    // });

    // let aa = await this.person$?.toPromise().then();
    // console.log("aa",aa);

    // this.person$?.subscribe(val => {
    //   console.log(val);
    // });

  }
}
