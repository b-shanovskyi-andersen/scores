import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PeopleService } from 'src/app/core/people/people.service';
import { Person } from 'src/app/shared/models/person.interface';

@Component({
  selector: 'app-person-details-page',
  templateUrl: './person-details-page.component.html',
  styleUrls: ['./person-details-page.component.scss']
})
export class PersonDetailsPageComponent implements OnInit {
  person$: Observable<Person>;
  
  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        take(1)
      )
      .subscribe(params => {
        this.person$ = this.peopleService.getById(Number(params.id))
      })
  }
}
