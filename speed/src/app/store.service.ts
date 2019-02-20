import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state = { contenido: 0}
  constructor() { }
}
