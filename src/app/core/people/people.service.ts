import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
}
