class Dep {
  constructor() {
    this.subscribers = new Set();
  }
  subscribe(handler) {
      this.subscribers.add(handler);
  }
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}
export default Dep;