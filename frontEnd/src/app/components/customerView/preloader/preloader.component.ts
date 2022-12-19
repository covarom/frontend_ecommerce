import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:load')
  check: boolean = false;

  NgOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.check = true
    }, 2000);
  }
}
