/**
 * 使用JS/TS实现观察者模式
 * 例如，a为发布者， b、c为观察者
 */
export class Subject {
  observers: Observer[] = [];

  add(observer: Observer) {
    this.observers.push(observer);
  }

  remove(observer: Observer) {
    const idx = this.observers.indexOf(observer);

    if (idx === -1) {
      throw new Error('没有该observer');
    }

    this.observers.splice(idx, 1);
  }

  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

export class Observer {
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} received`);
  }
}

// const a = new Subject();
// const b = new Observer('B');
// const c = new Observer('C');

// a.add(b);
// a.add(c);
// a.notify();
// a.remove(b);
// a.remove(c);
// a.notify();
