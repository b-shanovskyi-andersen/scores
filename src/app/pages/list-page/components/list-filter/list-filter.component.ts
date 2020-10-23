import { Component } from '@angular/core';
import { ListFilterService } from '../../services/list.service';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
  filter = '';

  constructor(private listFilterService: ListFilterService) {}

  filterList():void {
    this.listFilterService.setNameFilter(this.filter);
  }
}
