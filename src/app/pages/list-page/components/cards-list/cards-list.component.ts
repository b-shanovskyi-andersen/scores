import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PeopleService } from 'src/app/core/people/people.service';
import { Person } from '../../../../shared/models/person.interface';
import { getScore } from '../../../../shared/utils/get-person-score';
import { ListFilterService } from '../../services/list.service';


@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent implements OnDestroy, OnInit{
  private minScore: number = Infinity;
  private maxScore: number = -Infinity;
  private filteredPeople: { person: Person, column: number }[] = []
  private onDestroy$ = new Subject<void>();

  
  constructor(private listFilterService: ListFilterService, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.subscribeToPeople();
  }
  
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  // [TO-DO]: refactor to move code into services and get rid of code duplications
  private subscribeToPeople(): void {
    combineLatest([
      this.peopleService.getAll(), 
      this.listFilterService.nameFilter
    ])
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(([people, nameFilter]) => {
      this.setScores(people);
      this.setPeopleGroups(people.filter(person => !nameFilter || person.firstName.toLowerCase().includes(nameFilter.toLowerCase())))
    });
  }

  getPeopleByColumn(columnNumber: number): Person[] {
    return this.filteredPeople
      .filter(person => person.column === columnNumber)
      .map(person => person.person)
  }

  private getPersonColumn(person: Person): number {
    const range = this.maxScore - this.minScore;
    const score = getScore(person) - this.minScore;

    if (score < range / 3) {
      return 1;
    }

    if (score < range * 2 / 3) {
      return 2;
    }

    return 3;
  }

  private setScores(people: Person[]): void {
    const scores = people.map(person => getScore(person));
    this.minScore = Math.min(this.minScore, ...scores);
    this.maxScore = Math.max(this.maxScore, ...scores);
  }
  
  private setPeopleGroups(people: Person[]): void {
    this.filteredPeople = people.map(person => ({
      person,
      column: this.getPersonColumn(person)
    }));
  }
}
