import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFilterService {
  private nameFilter$ = new BehaviorSubject<string>(null);

  constructor() { }
  get nameFilter(): Observable<string> {
    return this.nameFilter$.asObservable();
  }
  
  setNameFilter(string): void {
    this.nameFilter$.next(string);
  }
}
