/* eslint no-console: 0 */
const checkParams = (type, listener) => {
  if (typeof type !== 'string' || !type) {
    throw new Error('Typeof event type must be string and shouldn\'t be empty.');
  }
  if (typeof listener !== 'function') {
    throw new Error('Typeof event listener must be function');
  }
};

const warn = (warning) => {
  console.warn(warning);
};

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(type, listener) {
    checkParams(type, listener);
    const lss = this.listeners[type];
    if (!Array.isArray(lss)) {
      this.listeners[type] = [];
      this.listeners[type].push(listener);
    } else {
      lss.push(listener);
    }
  }

  remove(type, listener) {
    checkParams(type, listener);
    const lss = this.listeners[type];
    if (!Array.isArray(lss)) {
      warn(`There is no such listener for type of ${type}`);
      return;
    }
    const idx = lss.indexOf(listener);
    if (idx === -1) {
      warn(`There is no such listener for type of ${type}`);
      return;
    }
    lss.splice(idx, 1);
  }

  emit(type) {
    const lss = this.listeners[type];
    if (!Array.isArray(lss)) {
      return;
    }
    lss.forEach((item) => {
      item();
    });
  }

  once(type, listener) {
    checkParams(type, listener);
    let lss = this.listeners[type];
    if (!Array.isArray(lss)) {
      this.listeners[type] = [];
      lss = this.listeners[type];
    }
    const idx = lss.length;
    function warpper() {
      listener();
      lss.splice(idx, 1);
    }
    lss.push(warpper);
  }
}

module.exports.EventEmitter = EventEmitter;
