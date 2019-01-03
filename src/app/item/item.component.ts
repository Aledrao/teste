import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITENS } from '../mock-itens';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  selectedItem: Item;
  itens: Item[];

  item: Item = {
    codigo: 1,
    nome: 'Transporte'
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() { 
    this.getItens();
  }
  
    onSelect(item: Item): void {
      this.selectedItem = item;
    }

    getItens(): void {
      this.itemService.getItens().subscribe(itens => this.itens = itens);
    }
}
