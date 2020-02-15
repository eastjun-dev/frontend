class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  $_subscribe(handler) {
      this.subscribers.add(handler);
  }
  $_notify() {
    this.subscribers.forEach(sub => sub());
  }
}
export default Dep;
