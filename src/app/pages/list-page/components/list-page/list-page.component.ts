import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/people/people.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent {
  constructor(public peopleService: PeopleService) { }
}
