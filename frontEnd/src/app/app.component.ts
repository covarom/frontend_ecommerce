import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import {Observable,of} from 'rxjs';
import { coffee } from './cofee';
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
  datas:coffee[]=[];
  getApi():Observable<coffee>{
    return this.http.get<coffee>('/test/list').pipe(
      );
}
ngOnInit(): void {
  this.getCoffe();
}
  getCoffe(){
    this.getApi().subscribe((res:any) => {
      this.datas=res
    })
  }
}
