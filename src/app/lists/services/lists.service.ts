import { Injectable } from '@angular/core';
import { List } from '../models/list';
import { HttpClient } from '@angular/common/http'

import { tap, first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private readonly API = '/assets/lists.json';

  constructor(private httpClient: HttpClient) { }

  allLists() {
    return this.httpClient.get<List[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(lists => console.log(lists))
    );
  }
}
