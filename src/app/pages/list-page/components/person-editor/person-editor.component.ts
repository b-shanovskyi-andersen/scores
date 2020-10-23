import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../../../shared/models/person.interface';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonEditorComponent implements OnInit {
  // [TO-DO]: allow using value passed from outside
  @Output() person = new EventEmitter<Person>();

  personForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // [TO-DO]: add validation
    this.personForm = this.formBuilder.group({
      firsName: [null, Validators.required],
      lastName: [null, Validators.required],
      income: [null, Validators.required],
      photoUrl: [null]
    });
  }
}
