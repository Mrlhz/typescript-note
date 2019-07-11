import { isPlainObject } from './helper/utils';

let str: string = 'Hello'

if (isPlainObject({})) {
  str += ', TypeScript'
}

const hello = document.createElement('h1')
hello.innerHTML = str
document.body.appendChild(hello)
