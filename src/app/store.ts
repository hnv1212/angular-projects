import { BehaviorSubject, Observable, distinctUntilChanged, pluck } from 'rxjs';
import { State } from './state';

const state: State = {
  playlist: undefined as any,
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe<T>(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
