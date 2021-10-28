import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../models/list';
import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists$: Observable<List[]>;
  displayedColumns = ['name', 'category'];

  // listsService: ListsService;

  constructor(private listsService: ListsService) {
    this.lists$ = this.listsService.allLists();
  }

  ngOnInit(): void {

  }

}
