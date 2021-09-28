import { view } from './view.js';

export const model = {
  record: 0,
  score: 0,
  misclicks: 0,
  speed: 0,
  time: 0,

  start() {
    console.log('Game is started', this.time, this.speed);
    this.timeChanger();
    this.circleFactory();
  },

  timeChanger() {
    view.changeTime(this.time);
    this.timerForTimeId = setInterval(() => {
      if (this.time > 0) {
        view.changeTime(--this.time);
      } else {
        this.finish();
      }
    }, 1000);
  },

  circleFactory() {
    this.timerForCircles = setInterval(() => {
      view.createCircle();
    }, this.speed);
  },

  finish() {
    clearInterval(this.timerForTimeId);
    clearInterval(this.timerForCircles);
    this.record = Math.max(this.score, this.record);
    view.finishGame();
  },

  getRandomNumber(min, max) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.round(Math.random() * (max - min) + min);
  },
};

window.m = model;