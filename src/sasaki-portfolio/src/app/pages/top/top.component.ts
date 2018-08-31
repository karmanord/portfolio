import { Component, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements AfterViewInit {
  topFlg = true;
  profileFlg = false;

  title1Flg = false;
  title2Flg = false;
  title3Flg = false;
  title4Flg = false;

  colorChange1Flg = false;
  colorChange2Flg = false;
  colorChange3Flg = false;

  timer1;
  timer2;
  timer3;


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
        this.timer1 = setInterval(() => {
          this.colorChange1Flg = !this.colorChange1Flg;
        }, 1000);
        this.timer2 = setInterval(() => {
          this.colorChange2Flg = !this.colorChange2Flg;
        }, 1500);
        this.timer3 = setInterval(() => {
          this.colorChange3Flg = !this.colorChange3Flg;
        }, 2000);
      }, 3000);
  }

  onClick() {
    this.topFlg = false;
    this.profileFlg = true;
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
  }
}
