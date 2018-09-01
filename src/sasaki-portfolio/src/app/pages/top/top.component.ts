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
  opportunityRecordFlg = false;

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

  name = '佐々木祐輔';

  birthday;
  today;
  years;

  style = false;

  constructor() {
    // 年齢を計算する
    this.birthday = new Date('9/12/1989');
    this.today = new Date();
    this.years = this.today.getFullYear() - this.birthday.getFullYear();

    this.birthday.setFullYear(this.today.getFullYear());

    if (this.today < this.birthday) {
      this.years--;
    }

    this.name += '(' + this.years + '歳)';
}

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
        }, 2000);
        this.timer3 = setInterval(() => {
          this.colorChange3Flg = !this.colorChange3Flg;
        }, 3000);
      }, 3000);
  }

  goToProfile() {
    this.topFlg = false;
    this.profileFlg = true;
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
    this.style = true;
  }

  goToRecord() {
    this.profileFlg = false;
    this.opportunityRecordFlg = true;
  }

  backToProfile() {
    this.profileFlg = true;
    this.opportunityRecordFlg = false;
  }
}
