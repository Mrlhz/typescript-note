const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

/**
 * 普通对象
 *
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']