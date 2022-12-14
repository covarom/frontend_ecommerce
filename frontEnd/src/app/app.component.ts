import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import {Observable,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private http:HttpClient) { }
  title = 'frontEnd';
}
