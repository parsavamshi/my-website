import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  tabName = 'feedback';
  constructor() { }

  ngOnInit(): void {
  }
  gettabClick(tabname: string) {
    this.tabName = tabname;
    // tabname.style = '{\'transition\': 1s}';
}
}
