export default class StopWatch {
  constructor(duration, running) {
    this.duration = duration;
    this.running = running;
  }
  start() {
    this.running = true;
    setTimeout(() => {
      this.duration++;
      this.start();
    }, 1);
  }
  stop() {
    this.running = false;
    clearTimeout(this.start);
  }
  reset() {
    this.duration = 0;
    this.running = null;
  }
}
