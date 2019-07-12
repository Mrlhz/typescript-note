/**
 * @description 数组扁平化 -- 不使用递归，使用 stack 无限反嵌套多层嵌套数组
 *
 * @export
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * 
 * flatten([1,2,3,[1,2,3,4, [2,3,4]]])
 * // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 */
export function flatten(arr: any[]): any[] {
  let stack = [...arr]
  let result: any[] = []
  while (stack.length) {
    let next = stack.pop()
    if(Array.isArray(next)) {
      stack = stack.concat(next)
    } else {
      result.push(next)
    }
  }
  return result.reverse()
}