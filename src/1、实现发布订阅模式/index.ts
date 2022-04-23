/**
 * 使用JS实现发布订阅模式
 */
type Handler = (params: unknown) => void;

interface Handlers {
  [prop: string]: Array<Handler|null>;
}

export class Event {
  handlers: Handlers = {};

  on(type: string, handler: Handler) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }

    this.handlers[type].push(handler);
  }

  off(type: string, handler: Handler) {
    if (!handler) {
      delete this.handlers[type];
      return;
    }

    if (!this.handlers[type]) {
      throw new Error('未绑定该事件');
    }

    const idx = this.handlers[type].indexOf(handler);
    if (idx === -1) {
      throw new Error('未绑定该处理函数');
    }

    this.handlers[type].splice(idx, 1);
    if (!this.handlers[type].length) {
      delete this.handlers[type];
    }
  }

  emit(type: string, ...params: unknown[]) {
    if (!this.handlers[type] || !this.handlers[type].length) {
      return;
    }

    this.handlers[type].forEach((handler) => {
      handler && handler(params);
    });
  }
}

// const eventBus = new Event();

// const b = (params: unknown) => {
//   console.log('B recieved', params);
// };

// const c = (params: unknown) => {
//   console.log('C recieved', params);
// };

// eventBus.on('publish', b);
// eventBus.on('publish', c);
// eventBus.emit('publish', 'message 1');
// eventBus.off('publish', b);
// eventBus.off('publish', c);
// eventBus.emit('publish', 'message 2');
