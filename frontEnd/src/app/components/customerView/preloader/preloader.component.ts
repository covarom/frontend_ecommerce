import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {


  constructor() { }
  check: boolean = false;

  NgOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.check = true
    }, 2000);
  }
}
