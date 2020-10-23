import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../models/person.interface';
import { getScore } from '../utils/get-person-score';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent {
  @Input() person: Person;

  @Output() close = new EventEmitter<void>();
  @Output() open = new EventEmitter<void>();

  get fullName(): string {
    return `${this.person.firstName} ${this.person.lastName}`;
  }

  get score(): number {
    return getScore(this.person);
  }

  handleCloseClick(): void {
    this.close.emit();
  }

  handleOpenClick(): void {
    this.open.emit();
  }
}
