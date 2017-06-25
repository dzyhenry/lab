/* eslint-disable */
function checkParams(type, listener) {
  if (typeof type !== 'string' || !type) {
    throw new Error('Typeof event type must be string and shouldn\'t be empty.');
  }
  if (typeof listener !== 'function') {
    throw new Error('Typeof event listener must be function');
  }
}

function  warn(warning) {
  console.warn(warning);
}

function EventEmitter () {
  if (new.target !== EventEmitter) {
    return new EventEmitter();
  }
  this.listeners = {};
}


EventEmitter.prototype.on = function on(type, listener){
  checkParams(type, listener);
  const lss = this.listeners[type];
  if (!Array.isArray(lss)) {
    this.listeners[type] = [];
    this.listeners[type].push(listener);
  } else {
    lss.push(listener);
  }
}
EventEmitter.prototype.remove = function remove(type, listener){
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
EventEmitter.prototype.emit = function emit(type){
  const lss = this.listeners[type];
  if (!Array.isArray(lss)) {
    return;
  }
  lss.forEach(item => {
    item();
  })
};
EventEmitter.prototype.once = function once(type, listener) {
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
