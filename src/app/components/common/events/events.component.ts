import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input('data') meals: string[] = [];
  page: number = 1;
constructor() { }

ngOnInit(): void {
}
banner: any = {
  pagetitle: 'Blog half image with sidebar',
  bg_image: 'assets/images/banner/bnr1.jpg',
  title: 'Blog half image with sidebar',
};
layout: any = {
  sidebar: true,
  sidebarPosition: 'right'
};

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
