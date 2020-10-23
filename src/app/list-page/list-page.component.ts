import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Person } from '../models/person.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {
  personList: Person[] = [
    {
      firstName: 'Ivan',
      lastName: 'Invanov',
      income: 2000,
      photo: 'https://placekitten.com/200/300'
    },
    {
      firstName: 'Roman',
      lastName: 'Romanov',
      income: 3333,
      photo: 'https://placekitten.com/200/400'
    },
    {
      firstName: 'Ivan',
      lastName: 'Invanov',
      income: 10500,
      photo: 'https://placekitten.com/700/900'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
