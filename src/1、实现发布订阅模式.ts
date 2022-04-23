/**
 * 使用JS实现发布订阅模式
 * 例如，a为发布者， b、c为订阅者
 */
type Handler = (params: unknown) => void;

interface Handlers {
  [prop: string]: Array<Handler|null>;
}

export class Emitter {
  handlers: Handlers = {};

  on(type: string, handler: Handler) {
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }

    this.handlers[type].push(handler);
  }

  off(type: string, handler: Handler) {
    if (!this.handlers[type]) {
      throw new Error('未注册该事件');
    }

    if (!handler) {
      delete this.handlers[type];
      return;
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

const a = new Emitter();

const b = (params: unknown) => {
  console.log('B recieved', params);
};

const c = (params: unknown) => {
  console.log('C recieved', params);
};

a.on('publish', b);
a.on('publish', c);
a.emit('publish', 'message 1');
a.off('publish', b);
a.off('publish', c);
a.emit('publish', 'message 1');
