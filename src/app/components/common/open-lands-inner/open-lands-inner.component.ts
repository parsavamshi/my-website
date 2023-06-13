import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-open-lands-inner',
  templateUrl: './open-lands-inner.component.html',
  styleUrls: ['./open-lands-inner.component.scss']
})
export class OpenLandsInnerComponent implements OnInit {
  dots1:any
  moreText1:any
  btnText1:any
  @Input('data') meals: string[] = [];
    page: number = 1;
  tabName = 'link1';
  constructor() { }

  ngOnInit(): void {
  }
  gettabClick(tabname: string) {
    this.tabName = tabname;
    // tabname.style = '{\'transition\': 1s}';
}
  myfunction1(){
    this.dots1 = document.getElementById('dots1');
   this.moreText1 = document.getElementById('more1');
    this.btnText1 = document.getElementById('btn1');

   if (this.dots1.style.display === 'none'){
     this.dots1.style.display = 'inline';
     this.btnText1.innerHTML = 'Read Less';
     this.moreText1.style.display = 'none';
   }else{
     this.dots1.style.display = 'none';
    this.btnText1.innerHTML = 'Read more';
     this.moreText1.style.display = 'inline';
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
