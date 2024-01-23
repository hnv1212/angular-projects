import {
  BehaviorSubject,
  Observable,
  distinctUntilChanged,
  map,
  pluck,
} from 'rxjs';
import { State } from './state';

const state: State = {
  playlist: [],
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: any): Observable<T> {
    return this.store.pipe(pluck(name)) as Observable<T>;
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
