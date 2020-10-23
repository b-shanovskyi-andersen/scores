import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../../../shared/models/person.interface';
import { getScore } from '../../../../shared/utils/get-person-score';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCardComponent {
  @Input() person: Person;

  @Output() close = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) {}

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
    this.navigateToDetails();
  }

  private navigateToDetails(): void {
    this.router.navigate([`./${this.person.id}`], { relativeTo: this.route } );
  }
}
