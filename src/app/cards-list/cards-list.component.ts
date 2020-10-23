import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from '../models/person.interface';
import { getScore } from '../utils/get-person-score';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent implements OnChanges {
  @Input() personList: Person[];

  private minScore: number;
  private maxScore: number;

  ngOnChanges(): void {
    if (!this.personList) {
      return;
    }

    this.setRange();
  }

  getPersonColumn(person: Person): number {
    const scoreForColumn = (this.maxScore - this.minScore) / 3;

    // [TO-DO]: check case if calculated right if a person has top score
    return Math.floor((getScore(person) - this.minScore) / scoreForColumn);
  }
  
  private setRange(): void {
    this.minScore = Math.min(this.minScore, ...this.personList.map(person => getScore(person)));
    this.maxScore = Math.max(this.maxScore, ...this.personList.map(person => getScore(person)));
  }
}
