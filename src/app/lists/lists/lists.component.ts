import { Component, OnInit } from '@angular/core';
import { List } from '../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: List[] = [
    { _id: '1', name: 'Mercado', category:'Alimentação' },
    { _id: '2', name: 'Viajem', category:'Diversão' },
    { _id: '2', name: 'Roupas', category:'Vestuario' }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
