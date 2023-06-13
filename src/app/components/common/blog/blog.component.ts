import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
}
