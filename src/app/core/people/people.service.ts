import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Person } from 'src/app/shared/models/person.interface';
import { mockPeople } from './poeple.mock';



@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people$ = new BehaviorSubject<Person[]>(mockPeople);

  getAll(): Observable<Person[]> {
    return this.people$.asObservable();
  }

  getById(id: number): Observable<Person> {
    return this.people$.asObservable().pipe(map(people => people.find(person => person.id === id)));
  }
}
