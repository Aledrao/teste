import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITENS } from './mock-itens';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItens(): Observable<Item[]> {
    this.messageService.add('ItemService: fetched hero');
    return of(ITENS);
  }
}
