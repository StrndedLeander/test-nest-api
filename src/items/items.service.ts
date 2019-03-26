import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '23456787543',
      name: 'Banana',
      price: 1.0,
      qty: 75,
    },
    {
      id: '67987543',
      name: 'Strawberry',
      price: 1.2,
      qty: 40,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
