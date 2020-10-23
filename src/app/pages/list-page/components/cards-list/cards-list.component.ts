import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from '../../../../shared/models/person.interface';
import { getScore } from '../../../../shared/utils/get-person-score';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent implements OnChanges {
  @Input() personList: Person[];

  highScorePeople: Person[] = [];
  mediumScorePeople: Person[] = [];
  lowScorePeople: Person[] = [];
  
  private minScore: number = Infinity;
  private maxScore: number = -Infinity;

  ngOnChanges(): void {
    if (!this.personList) {
      return;
    }

    this.setPeopleGroups();
  }

  getPersonColumn(person: Person): number {
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
  
  private setPeopleGroups(): void {
    const scores = this.personList.map(person => getScore(person));
    this.minScore = Math.min(this.minScore, ...scores);
    this.maxScore = Math.max(this.maxScore, ...scores);

    this.highScorePeople = [];
    this.mediumScorePeople = [];
    this.lowScorePeople = [];

    this.personList.forEach(person => {
      switch(this.getPersonColumn(person)) {
        case 1: {
          this.lowScorePeople.push(person)
          break;
        }
        case 2: {
          this.mediumScorePeople.push(person)
          break;
        }
        case 3: {
          this.highScorePeople.push(person)
          break;
        }
      }
    })
  }
}
