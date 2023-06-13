import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showBox = true;
  classApplied = false;

  
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {}

  toggleClass() {
    this.classApplied = !this.classApplied;
    
  }
  closeNavbar() {
    this.classApplied = false;
    window.scroll(0,0);
    
  }

  statusClass = 'not-active';

  setActiveClass(){
    // this.statusClass = 'active';
    if(this.statusClass == 'not-active'){
      this.statusClass = 'active'
    }else{
      this.statusClass = 'not-active'
    }
  }
  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //   window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 0));
        }
    })();
}

}
