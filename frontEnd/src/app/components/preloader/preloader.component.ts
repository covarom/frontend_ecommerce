import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  // constructor(private elRef: ElementRef) { }

  @HostListener('window:load')
  onLoad() {
    console.log('is window:load');
  }



  // NgOnInit(){
  //   this.window.onload = () => {
  //     window.setTimeout(this.fadeout, 500);
  //   }
  // }

  //  fadeout() {
  //   let opacity: any = this.elRef.nativeElement.querySelector('.preloader').style.opacity = '0';
  //   let display: any = this.elRef.nativeElement.querySelector('.preloader').style.display = 'none';
  // }
}
