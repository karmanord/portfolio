import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements AfterViewInit {
  title1Flg = false;
  title2Flg = false;
  title3Flg = false;
  title4Flg = false;

  constructor() { }

  ngAfterViewInit() {

    setTimeout(() => {
      this.title1Flg = true;
    }, 800);

    setTimeout(() => {
      this.title2Flg = true;
    }, 1200);

    setTimeout(() => {
      this.title3Flg = true;
    }, 1600);

    setTimeout(() => {
      this.title4Flg = true;
    }, 3000);
  }
}
