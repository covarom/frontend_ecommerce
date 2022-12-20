import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  message = '';
  messageType = 'danger';


  constructor() { }
}
